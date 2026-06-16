# Protegendo e Recuperando Dados Perdidos - Git, Backup, BTRFS
- videoId: yfEhz9poqW8
- url: https://www.youtube.com/watch?v=yfEhz9poqW8
- duracao: 1:10:53
- pilar: 5. Sistemas de Arquivos & Armazenamento
- pilaresSecundarios: [11. Git & Ferramentas de Desenvolvimento, 10. DevOps, Containers, Linux & Virtualização]
- prioridade: Alta
- conceitos: Git como rede de segurança (init local, bare clone em pendrive, servir via http+ngrok, amend/squash); superbloco e recuperação (fsck, dd bit-a-bit, TestDisk/Photorec); journaling e Copy-on-Write; checksums por bloco, scrubbing e RAID (ZFS/BTRFS); snapshots com Timeshift + grub-btrfs; deduplicação; estratégia 3 camadas de backup e proteção contra ransomware; armadilha de espaço do BTRFS com Docker (balance/chattr +C)
- sintese: Ensina a nunca perder dados combinando Git em todo projeto, sistemas de arquivos modernos com checksums/CoW/snapshots (BTRFS, ZFS, Timeshift) e backups externos, além de mostrar recuperação de partições corrompidas e arquivos apagados.
