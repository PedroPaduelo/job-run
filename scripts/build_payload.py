"""Build the JSON payload for the HTML from the analysis summaries."""
import os, re, json
from collections import defaultdict, Counter

manifest = json.load(open('transcripts/_manifest.json'))
order = [v['videoId'] for v in manifest['videos']]

videos = []
for vid in order:
    p = f'transcripts/_analysis/{vid}.md'
    t = open(p).read()
    def grab(field):
        m = re.search(rf'^- {field}:\s*(.+)$', t, re.M)
        return m.group(1).strip() if m else ''
    title = t.splitlines()[0].lstrip('# ').strip()
    sec_raw = grab('pilaresSecundarios')
    sec = []
    mm = re.search(r'\[(.*?)\]', sec_raw)
    if mm and mm.group(1).strip():
        sec = [s.strip() for s in mm.group(1).split(',') if s.strip()]
    videos.append({
        'videoId': grab('videoId'),
        'title': title,
        'url': grab('url'),
        'duracao': grab('duracao'),
        'pilar': grab('pilar'),
        'pilaresSecundarios': sec,
        'prioridade': grab('prioridade'),
        'conceitos': grab('conceitos'),
        'sintese': grab('sintese'),
    })

by_pilar = defaultdict(list)
for v in videos: by_pilar[v['pilar']].append(v)
pilar_order = sorted(by_pilar.keys(), key=lambda p: (-len(by_pilar[p]), p))
pilar_count = {p: len(by_pilar[p]) for p in pilar_order}
prio_count = dict(Counter(v['prioridade'] for v in videos))

DESC = {
  '1. Fundamentos de Computação & Arquitetura de Hardware': 'Turing, Von Neumann, CPUs/GPUs, evolução de 8 a 64 bits, emuladores, computação hardcore. Os pilares teóricos e práticos de como o computador funciona por dentro.',
  '2. Redes': 'Da camada física (ondas, modulação) até a web (sockets, SSH, VPN/NAS) — a série completa de Introdução a Redes.',
  '3. Criptografia & Segurança': 'Criptografia simétrica/assimétrica, certificados, hashes, gerenciadores de senhas, 2FA, fator humano, supremacia quântica.',
  '4. Bancos de Dados': 'Dos primórdios (B-trees, ACID) ao Big Data e NoSQL. Como bancos funcionam por dentro e quando usar cada tipo.',
  '5. Sistemas de Arquivos & Armazenamento': 'FAT, ZFS, BTRFS, dispositivos de armazenamento, HDs/SSDs, compressão, backup 3-2-1, recuperação de dados.',
  '6. Linguagens, Compiladores & Fundamentos de Programação': 'Compilada vs interpretada, história das linguagens, C/Python/Java/Rust, GPL, LLVM, JIT, o que faz uma linguagem "especial".',
  '7. Estruturas de Dados & Algoritmos': 'Árvores, grafos, B-trees — estruturas fundamentais que sustentam bancos, redes sociais e sistemas.',
  '8. Backend, Concorrência & Memória': 'A série Back-End para Iniciantes: processos, threads, concorrência, paralelismo, gerenciamento de memória, garbage collector, jobs assíncronos.',
  '9. Web, Escalabilidade & Arquitetura de Aplicações': 'Os 12 fatores, Heroku, escalabilidade real (Ingresso.com), história do front-end, Ruby on Rails, SAP, modelagem de software.',
  '10. DevOps, Containers, Linux & Virtualização': 'Containers, Docker Compose, DevOps, QEMU/KVM, virtualização, distros Linux (Slackware, Gentoo, Arch, Ubuntu), WSL2, software livre, Rinha de Backend.',
  '11. Git & Ferramentas de Desenvolvimento': 'Entendendo Git por dentro (objetos, DAG, SHA-1) e limpando commits na prática.',
  '12. IA / LLMs': 'Como o ChatGPT funciona por dentro, o que IAs podem (e não podem) fazer, Low-Code, GPT-3.',
  '13. Carreira, Aprendizado & Desenvolvimento Pessoal': 'Aprender a aprender, faculdade, mercado de TI para iniciantes, mindset, talento, inglês, motivação, TDAH, priorização, palestrar.',
  '14. Gestão, Metodologias & Organizações': 'Gestão, modelo Spotify, metodologias ágeis, Mythical Man-Month, projetos, testes, estimativa.',
  '15. Startups, Mercado & Economia': 'Mitos de startups, bolha, empreender com software, power laws salariais, economia (Ulrich), mercado financeiro pós-pandemia.',
  '16. Blockchain & Criptomoedas': 'Blockchain, ICOs, Malta, Seoul, Coréia, cripto no Brasil, blockchain em eleições.',
  '17. Hardware Pessoal, Setup & Mídia': 'Teclados mecânicos, setup de gravação, CODECs, fotografia, upgrade de PC.',
  '18. Biografia, Bastidores & Cultura': 'História pessoal/carreira de Akita (1990–2002), bastidores do canal, retrospectivas, recomendações de shows, monetização, viagens.',
}

PRIO_RANK = {'Alta': 0, 'Média': 1, 'Baixa': 2}
for p in pilar_order:
    by_pilar[p].sort(key=lambda v: (PRIO_RANK.get(v['prioridade'], 9), v['title']))

out = {
    'videos': videos,
    'pilar_order': pilar_order,
    'pilar_count': pilar_count,
    'prio_count': prio_count,
    'desc': DESC,
    'total': len(videos),
    'total_pilares': len(by_pilar),
}
open('workspace_payload.json', 'w').write(json.dumps(out, ensure_ascii=False))
print(f'built {len(videos)} videos, {len(by_pilar)} pilares')
print('prio:', prio_count)
