# Games em Máquina Virtual com GPU Passthrough | Entendendo QEMU, KVM, Libvirt
- videoId: IDnabc3DjYY
- url: https://www.youtube.com/watch?v=IDnabc3DjYY
- duracao: 1:08:18
- pilar: 10. DevOps, Containers, Linux & Virtualização
- pilaresSecundarios: [1. Fundamentos de Computação & Arquitetura de Hardware, 2. Redes, 17. Hardware Pessoal, Setup & Mídia]
- prioridade: Média
- conceitos: GPU PCI passthrough; IOMMU/VFIO; QEMU/KVM/libvirt e virsh; chipset Q35 e firmware UEFI OVMF + TPM virtual; pinagem de vCPU por cache L3 (lscpu/lstopo); cgroups e hooks do libvirt; redes virtuais NAT/Bridge (virbr/TAP); cgroups+namespaces como base de containers
- sintese: Explica na prática como rodar Windows virtualizado em Linux passando uma GPU NVIDIA inteira via IOMMU/VFIO, detalhando todos os componentes (QEMU, KVM, libvirt), firmware UEFI, pinagem de CPU por topologia de cache e configuração de rede/áudio virtuais.
