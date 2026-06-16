# Criptografia na Prática - Certificados, BitTorrent, Git, Bitcoin

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=iAA8NrfQtHo
- **Duração:** 1:14:10
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala. (Neste vídeo o YouTube serviu a
> faixa de legendas em inglês.)

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Hey folks, Fabio Akita here. Cryptography is a hugely broad subject. |
| 0:05 | Today I want to show in a more practical way some common components you're going to run into sooner or later. I've already made 2 videos on the theory — go watch them afterward. |
| 0:14 | I'm not a security specialist — I'm a developer who got interested in the subject, period. So don't take everything I say as the only way or as complete. |
| 0:24 | It's just what I consider the minimum, from developer to developer. If you're a specialist in the field, please add your input in the comments below. |
| 0:32 | If you've avoided this topic until now, today is the day to dive in. I want to show how data encryption works, how digital certificates work, |
| 0:41 | and how all of this is applied in the real world, step by step. In the second half I'll explain how BitTorrent works and which technologies make it similar to Git. Let's go. |
| 0:54 | (...) This is a video for people who've already graduated but haven't played with cryptography enough yet. |
| 1:01 | Unfortunately you'll need a minimum foundation to proceed, and this time I won't hold your hand much. Pay close attention, take notes if you need to. If you don't understand |
| 1:12 | the beginning, you won't be able to follow the reasoning after. Pause, rewind, and rewatch |
| 1:17 | until you get it. The first half is worth opening a terminal and trying the commands yourself to |
| 1:23 | feel how they work firsthand. Dense videos like today's aren't meant to be watched only once. |
| 1:28 | Every modern CPU has hardware instructions for encrypting data. If you have a Mac and enabled File |
| 1:34 | Vault, if you have Windows and enabled BitLocker, or if you use Linux with LUKS, they all use the |
| 1:40 | encryption algorithm AES — probably the 256-bit variant. On modern CPUs it's very rare to feel |
| 1:47 | the system get slower because of it, which is why I recommend keeping it enabled, especially on |
| 1:52 | laptops. If they get stolen, the odds of someone accessing your data are near zero. If you want to improve performance, the right move isn't to turn off encryption — it's to buy a better SSD. |
| 2:03 | There are still people who think that just because they need to log in when they turn the machine on, they're safe. They're not. If you remove the HDD or SSD from your laptop and plug it into another machine, |
| 2:13 | I'll have access to all the files if they're not encrypted. Your login and password make no difference. OS login only prevents one user from accessing another user's files |
| 2:23 | while the machine is on and nobody has physical access to the hardware. If there's |
| 2:29 | physical access, it makes no difference. This applies to any OS. In the "Your Security Sucks" episode I demonstrated using VeraCrypt. Unlike |
| 2:38 | BitLocker on Windows, which only supports AES because it's the most performant, |
| 2:43 | VeraCrypt lets you choose other algorithms. For very large things it'll be slower, but |
| 2:49 | on the other hand it's the most secure. An HDD with BitLocker might be hard to crack, but knowing it's AES |
| 2:55 | we can focus only on that. But an image encrypted with VeraCrypt — we don't even know the algorithm used, |
| 3:01 | and that increases security exponentially. That's why for absolutely critical things it's better to use VeraCrypt. For day-to-day use, AES from BitLocker or FileVault is more than sufficient. |
| 3:13 | I'll repeat: if you have important data on a laptop you carry under your arm |
| 3:18 | to work from some Starbucks, I hope you're not dumb enough to walk around without encryption. But how does this type of encryption work? Let's go through some examples. |
| 3:27 | One of the most well-known and widely-used security and cryptography packages in the world is the famous |
| 3:32 | OpenSSL. It's a massive package with practically everything you need to handle cryptography. |
| 3:38 | There are other alternatives like LibreSSL, Google's BoringSSL, Mozilla's NSS, and others, |
| 3:45 | but I'll focus on OpenSSL because it's still one of the most used. From a Linux terminal, here's how we can generate a random key. Let's call it "key.bin." |
| 3:54 | We generate a binary key of 32 bytes, or 256 bits. This key is secure enough for |
| 4:01 | most uses today. To be more secure we should add external entropy, for example with external hardware or the TPM chip that comes in modern machines |
| 4:11 | using something like TPM2-TSS. Initial entropy is extremely important for |
| 4:17 | defining the strength of a key. But just for use as an example, this will do. Because it's important, here's one more tangent. Everything in cryptography depends on a PRNG |
| 4:27 | or Pseudo Random Number Generator. There's no truly random number — |
| 4:32 | there are functions that, given an initial number, can keep "spitting out" numbers that seem random. If we put them in a statistical distribution, it would be uniform, |
| 4:43 | where all numbers have roughly the same chances of appearing, with no bias. |
| 4:49 | More than that, the generated numbers shouldn't look different from true randomness — |
| 4:55 | they must be resistant to backtracking. It shouldn't be possible to reconstruct previous numbers |
| 5:00 | just by looking at a sequence of generated numbers. That is, they must be prediction-resistant — |
| 5:05 | it shouldn't be easy to predict the next ones. They must be difficult or impossible to reproduce. |
| 5:11 | Good random numbers are provided by the operating system. In Linux, there's a device at "/dev/random" which is where packages like OpenSSL connect. We can increase |
| 5:22 | its entropy using a service like "rngd". On Arch just install it with "pacman -S rngd", |
| 5:29 | enable and start it with "systemctl enable" and "systemctl start". This service will try to |
| 5:35 | pull entropy from hardware devices or your PC's TPM chip, if it's a modern one. |
| 5:41 | The TPM chip — Trusted Platform Module — is what generated controversy when Windows 11 |
| 5:46 | initially was going to require everyone to have one. They eventually walked that back because many people didn't have it and complained loudly. But the right thing really is to have that chip. Every motherboard has a slot for it, |
| 5:57 | but on cheap models it comes empty for you to buy separately. Among its various security functions, it provides hardware entropy. This "rngd" service |
| 6:07 | feeds "/dev/random" which, in turn, is used by OpenSSL. |
| 6:13 | Several classes of malware and viruses are blocked by having a properly configured TPM chip, |
| 6:19 | in particular rootkits, as well as improving encryption with BitLocker. Check whether your |
| 6:25 | machine has it, or has support for installing it. If it does, buy it and install it. Every Mac and iPhone has |
| 6:31 | a similar chip installed from the factory — the T2 chip — which is one reason a Mac is more secure |
| 6:36 | than a cheaper PC. None of this makes you 100% safe, but it certainly improves your defense. |
| 6:42 | Back to the example. Now I'll create a silly file called "test.txt" with the good |
| 6:48 | old "Hello World" phrase. And let's encrypt it using our key. This OpenSSL command will use AES 256 in CBC mode, with salt, passing test.txt and outputting test.txt.enc, |
| 7:03 | using the key.bin we just generated. Done. If we "cat" the new file, |
| 7:08 | it'll return binary garbage. We can view it with hexdump and it has nothing to do with the original file anymore. This is the expected result. |
| 7:16 | One more note here. Just to simplify the example, I chose AES 256 in CBC mode |
| 7:22 | or Cipher Block Chaining. It's better than the older ECB but is sensitive to ciphertext errors |
| 7:27 | and is vulnerable to padding oracle attacks if not implemented correctly. |
| 7:33 | Besides CBC there's Cipher Feedback or CFB, Output Feedback or OFB, |
| 7:40 | Counter or CTR, and Galois/Counter Mode or GCM. If you have to choose, use GCM. |
| 7:47 | I'm using CBC with a salt, which is already better than plain CBC, but if you use GCM it'll generate an authentication tag and attach it to the |
| 7:56 | encrypted file. The right approach is to worry about the transport of that tag, because it needs to be transported securely and not as an open email attachment, |
| 8:05 | for example. You also need to worry about Initialization Vectors, or IVs. That's why most |
| 8:11 | tutorials out there, like my example, use CBC — because it's simpler to explain. |
| 8:16 | Understand this: it may have seemed like I threw in a bunch of acronyms for no reason just to confuse, but it was to demonstrate that most tutorials will choose the simplest option to explain, |
| 8:26 | which tends to be the least secure. That's why I say if you haven't studied cryptography in depth, you shouldn't be making cryptography decisions — |
| 8:33 | you'll use it wrong and make your system's encryption less secure. It was one of my criticisms when JWT — JSON Web Authentication — was launched back in the day: |
| 8:44 | it required developers to know how to make those algorithm and mode decisions, but almost nobody knows, and nobody's going to learn it properly. It shouldn't allow the obviously |
| 8:55 | most insecure combinations. But doing that would make usability harder. It's always a trade-off: |
| 9:00 | the more you try to make something usable, the more insecure it'll be. Security is genuinely complicated. |
| 9:07 | Now I could send the encrypted file to someone over the internet and, if they have my key, they could decrypt it with a similar command |
| 9:16 | like this. OpenSSL AES 256 CBC mode receiving the encrypted test.txt.enc and decrypting |
| 9:24 | it into test.txt.dec passing the key.bin. With a "cat" command we see it succeeded. |
| 9:32 | Cool — in simplified terms, that's how BitLocker, FileVault, or VeraCrypt |
| 9:37 | would be handling your data. I say simplified because here I gave an example dealing with entire files, but file systems deal with block streams. Anyway, on the physical HDD you'd only have |
| 9:47 | the equivalent of that "test.txt.enc" file — the encrypted version. And you need that key |
| 9:53 | somewhere to be able to read the original content back. This would normally be heavy |
| 9:59 | to compute, but encryption and decryption isn't done in software — it's done via instructions |
| 10:04 | directly from the CPU, in hardware, which is why the process is accelerated and we barely feel it. |
| 10:11 | But in the previous example we have a massive problem. If the goal of encrypting a file is to send it securely to another person, |
| 10:19 | how do we send the key securely too? The only way would be for that person to come to |
| 10:26 | my place, bring a flash drive, and I'd save the key directly onto the drive — never transmitting it over the internet. But that's not practical. How do I pass a key |
| 10:35 | to someone else in a way that nobody on the internet can intercept or tamper with? |
| 10:41 | That's where the concept of asymmetric keys comes in. Again, I explain this in detail in |
| 10:46 | my 2nd cryptography video. But let me give a practical example. Back to the terminal, let's use OpenSSL to generate a key pair. Literally two files: |
| 10:55 | one called private.pem and another called public.pem. Anyway, I chose the RSA 2048-bit algorithm option. And I already know there must be people |
| 11:05 | going to the comments to complain "dammit Akita, you should have used elliptic curve instead of RSA." |
| 11:11 | I explained what those algorithms are and the differences in my old video, but in short, yes, Elliptic Curve Cryptography or ECC is stronger than RSA. An ECC key of 256 |
| 11:23 | bits is stronger than an RSA key of 3072 bits — more than 10 times the size. |
| 11:30 | The problem is that OpenSSL doesn't offer simple commands for encrypting arbitrary data with |
| 11:36 | ECC keys because ECC is normally used for things like key transport or ECDH, |
| 11:42 | digital signatures which is ECDSA, or with key encapsulation mechanisms in ECIES. That is, |
| 11:49 | it's not simple to just go and encrypt arbitrary data with it. I could use ECDH but the point of this video isn't to dive into the minutiae of ECC — it's to give a general overview of cryptography, |
| 12:00 | and for that purpose RSA will be more than sufficient. RSA is simpler to use and teach, but if |
| 12:07 | you're building something serious, study everything I just said about ECC. And what are these RSA files that were generated? We can use the "cat" command and |
| 12:16 | it'll list the content. It's the Base64 version of the binary key. Base64 is how we encode binary |
| 12:23 | into ASCII characters that can be displayed on screen. We convert 8 bits to 7 bits, which is why it gets a bit bigger. The private.pem is longer and the public.pem is shorter. Look. |
| 12:34 | Files with the ".pem" extension stand for Privacy Enhanced Mail — a text file format exactly like those keys I just showed. That's it: |
| 12:43 | a file that starts with those dashes, BEGIN, ends with END at the bottom, and in the middle is some binary formatted with Base64. If you use SSH, you've already generated keys in this format. |
| 12:54 | The public and private keys generated with the commands `openssl genpkey` and `openssl rsa` |
| 13:01 | are related through the RSA encryption algorithm. The process starts by generating |
| 13:07 | two large, random prime numbers. These prime numbers are kept secret |
| 13:12 | and are the foundation of the system's security. These prime numbers are then multiplied together, |
| 13:17 | resulting in a number called the 'modulus.' This modulus is used in the creation of both keys. |
| 13:23 | The public key is derived from the modulus and a public exponent, which is a predefined and generally small number. The public |
| 13:31 | key can be shared with anyone and is used to encrypt messages |
| 13:36 | that can only be decrypted by the corresponding private key. On the other hand, the private key is generated using the original prime numbers and a |
| 13:46 | private exponent calculated from them. The private key is kept secret and is used |
| 13:51 | to decrypt messages encrypted by the public key. Although the public and private keys aren't the prime numbers themselves, they are mathematically |
| 14:02 | related to the prime numbers used during generation. This mathematical relationship is |
| 14:08 | fundamental to how RSA cryptography works and is what enables secure communication, where |
| 14:15 | information encrypted with the public key can only be read by the corresponding private key, |
| 14:20 | and vice versa. Alright, you didn't get any of that. Let's simplify with an example. |
| 14:25 | I type the openssl command asking it to encrypt my key.bin using |
| 14:31 | the public key, resulting in a new file key.bin.enc. Done — |
| 14:36 | now we have the original symmetric key, encrypted using the new public key. |
| 14:42 | If we list the content with hexdump, see how the binaries are different. Let's recap to avoid confusion. I generated a symmetric AES key called |
| 14:52 | "key.bin." I want to use this key to encrypt files or messages to send to a second person somewhere on the internet — let's call them John. But |
| 15:01 | encrypting the message and sending it to John is pointless because he needs the key. But I can't |
| 15:06 | send the key via email or WhatsApp because that has zero security. We need to guarantee that nothing in between can intercept or tamper with my messages to John. |
| 15:17 | The problem with sending the key directly by email is if someone on the internet — let's call them Skynet — intercepts that communication and keeps my key |
| 15:26 | without forwarding it. Then it sends a different, forged key to John. John doesn't know he |
| 15:31 | received a fake key. Now I, Fabio, will send a message encrypted with my key that says "John, I found Skynet's location — it's at coordinates X Y." |
| 15:42 | Skynet intercepts this communication, and since it already intercepted my key, it can easily open the message. Now it forges a second message saying "John, |
| 15:53 | I found Skynet, click this link to see the location!" |
| 15:58 | encrypts it with the fake key and sends it to John. John opens it thinking it came from me. Then, trusting it, clicks the link — and that's it, humanity is done for. Game over. I always say: |
| 16:09 | never go clicking on links you receive by email or WhatsApp. But I knew this could happen. Instead I had already taught John: "create an RSA key pair, |
| 16:17 | and send me the public key, but never — ever — transmit the private key |
| 16:24 | outside your machine." He sends me the public key — by open email is fine — and with |
| 16:29 | that key I encrypt that "key.bin" file. When John receives the encrypted message, |
| 16:35 | he can run the following command. OpenSSL decrypt the key.bin.enc with the private key. |
| 16:42 | Understand: when I encrypt something with John's public key, the only one who can open it is John with his private key. If I can |
| 16:50 | pass my symmetric key, key.bin, to him securely, we're guaranteed that only |
| 16:55 | the two of us have the secret and can start exchanging AES-encrypted communications — |
| 17:01 | and Skynet has no way to intercept or forge messages in between. |
| 17:06 | But there's a small flaw in this process. How do I know the public key John sent me |
| 17:12 | really came from John and isn't Skynet trying to trick me again? This is the same |
| 17:18 | problem we have today with websites and e-commerce. How do I know the public key |
| 17:24 | I received from Amazon is really Amazon's? How do I know it's not a hacker's site — a Skynet — |
| 17:30 | trying to impersonate Amazon? Let's understand the last missing piece: the Certificate Authority. |
| 17:36 | This is the principle behind SSL — or more correctly, TLS — which every browser uses. |
| 17:42 | What happens behind the scenes without you seeing it: first, we open the browser and type "https://amazon.com." Important that it's an "https" site. The browser then requests |
| 17:54 | a secure connection to Amazon's web server, which in turn returns a digital certificate. |
| 18:00 | A digital certificate is a package that contains the public key — the half of Amazon's |
| 18:06 | key pair. The private key never leaves the server. Remember this concept: private keys can never |
| 18:13 | touch the internet — ever. But how can I guarantee it's not Skynet — that |
| 18:18 | my connection was intercepted and I received a fake certificate? That's what CAs, or Certificate |
| 18:24 | Authorities, exist for. Let's illustrate with an example, because it's important to have this process in mind. Again, the goal of the video isn't to be a tutorial. But if you've never seen it, |
| 18:32 | I'll create a new digital certificate using the Let's Encrypt service associated with my valid domain "akitando.me." To create a certificate you need a registered |
| 18:42 | valid domain. The traditional way is a super tedious step-by-step process. It's already well-documented, you can find it in dozens of places — just Google it. But Let's Encrypt is easier because |
| 18:52 | it simplifies several steps. To start you need to have the "certbot" program installed on your machine. |
| 18:58 | We kick off the process by asking it to generate a certificate for my domain using the method of checking a DNS record to confirm I actually own that domain. Only the domain owner |
| 19:09 | can configure the nameserver. In this case it generates what we call a challenge — a challenge that's this random number here. I have to register a TXT field in the DNS of the |
| 19:19 | domain with exactly that number. This isn't a password — it stays open. It's just to confirm that the person requesting the certificate is actually the domain owner. |
| 19:29 | In my case, my DNS/nameserver is on AWS so I open Route53 to edit the records of my |
| 19:36 | domain "akitando.me." Depending on where your domain is, it'll be a different screen, but the principle is the same. Then you have to wait a few minutes for that |
| 19:45 | information to replicate across the internet. If you don't know how DNS works, don't miss my series on networking — I already explained it there. |
| 19:52 | Once validated, we'll get two files saved to "/etc/letsencrypt/live/akitando.me": |
| 19:59 | one called "fullchain.pem" — the actual digital certificate that will be served to every |
| 20:05 | browser that connects to my web server — and "privkey.pem," the private key that must |
| 20:11 | never leave my server or be transmitted over the internet in any form. I'm repeating this so you never forget: |
| 20:18 | a private key is called "private" for a reason. If you lose that private key, |
| 20:24 | anyone can impersonate you. And if someone is thinking "damn, what if I really |
| 20:29 | lose that key?" The solution is to immediately generate a new certificate and replace it. |
| 20:35 | I didn't actually install this key because I don't have a site at that domain, but if I did, the famous padlock would appear in your browser. The information that shows up when you |
| 20:44 | click the padlock is exactly the content of that "fullchain.pem" file. It contains |
| 20:49 | the public key and is signed by a CA — the Certificate Authority — in this case, Let's Encrypt. |
| 20:55 | There's the answer to how we can guarantee that the certificate the site gave us is trustworthy. Every browser — Firefox, Safari, Edge, |
| 21:04 | Chrome, Opera — comes pre-installed with several root certificates from Certsign, DigiCert, |
| 21:10 | GlobalSign. These are files installed together with your browser, or that your browser |
| 21:17 | pulls from the operating system itself. One of the two will have those root certificates. |
| 21:22 | If you downloaded your browser outside the official site, from some generic download site, there's no guarantee |
| 21:28 | whatsoever. La garantia soy yo. But if you're using Safari that came with your Mac, or Edge that |
| 21:34 | came with your Windows, the probability is they're legitimate. Again, if you bought your machine used |
| 21:39 | from a third party and never reformatted it, you can't guarantee anything. No machine that wasn't |
| 21:44 | installed by you, or purchased from a real store, has any guarantee — period. |
| 21:50 | We can open the "fullchain.pem" file directly and look — we have a chain of certificates. First, mine for my domain. Then |
| 21:58 | we see it was signed by Let's Encrypt — which is this R3. And it itself, in turn, |
| 22:03 | is signed by another authority, the Digital Signature Trust Co. Root certificates can be installed with the operating system, |
| 22:12 | or can come with browsers. Google Chrome and other browsers based on Chromium typically use what's in the operating system. Firefox |
| 22:20 | prefers to use its own certificates. On Arch Linux, like the Manjaro I use, they come in the "ca-certificates" package and usually live in the "/etc/ssl/certs" directory. Look — |
| 22:32 | a sample of the certificate listing. And if we look further down, we have the "ISRG Root X1" certificate which is the root we saw in the digital certificate generated by Let's Encrypt. |
| 22:43 | My browser finds the ISRG Root X1 installed on the machine. It proceeds from the assumption that it can |
| 22:50 | trust every certificate signed by any authority below it. It's a |
| 22:55 | chain of signatures. The certificate for my domain akitando.me was signed by |
| 23:01 | Let's Encrypt's private key, which in turn has a certificate signed by ISRG which is |
| 23:08 | verified by Digital Signature Trust which, ultimately, was installed on my |
| 23:14 | operating system. In the final analysis, we trust that the operating system wasn't tampered with |
| 23:19 | because we installed it with the official ISO or it came pre-installed from the factory on a new machine. |
| 23:25 | When we ran the "certbot" process, it generated that "fullchain.pem." It started by generating |
| 23:30 | the public-private key pair. Then it packaged it in the certificate — a data structure with |
| 23:36 | information like the domain name, email, the public key, etc. It's just a file, like a JSON, for instance, but in a specific certificate format. At the end, it |
| 23:46 | generates a fingerprint of that file — a hash using an algorithm like SHA256. |
| 23:53 | Fingerprint is another name for a hash. When we pass a file or some content through a hashing algorithm, the result is a |
| 24:02 | fingerprint. Because if we change even 1 bit of the original file and rehash it, |
| 24:08 | the result will be completely different. In a moment I'll return to hashing. For now understand that hashing serves to identify exactly the original content of anything. |
| 24:17 | And what we call a digital signature is the hash via a private key from some authority. |
| 24:24 | Let's look at another example. YouTube.com. Look at the padlock here in the browser. If we open it we see |
| 24:29 | that the root is a certain GTS Root R1. Going back to that "/etc/ssl/certs" directory we find the |
| 24:37 | certificate file and opening it we can see it's Google Trust Services LLC — |
| 24:43 | a company inside Google itself dedicated solely to managing this root certificate. Google being a giant, |
| 24:49 | it's in their interest to also have control over a certificate authority. Yes, |
| 24:54 | your computer automatically trusts everything from Google. There are various ethical implications to that kind of thing but it's out of scope for this video. |
| 25:02 | With this the browser knows the site's certificate is "valid." Then it can take the public |
| 25:08 | key from inside the certificate and use it to encrypt a symmetric key. This |
| 25:13 | establishes what's called a "secure connection." The way it sounds gives the impression we start using, I don't know, a special network cable that's more secure or something. But no — |
| 25:21 | nothing changed. We're on the same physical network as before. The difference is that we can now communicate securely, encrypting all the packets. And from this point on, |
| 25:30 | everything the browser sends to the server and vice versa will be encrypted with that key. |
| 25:37 | All of this is done to guarantee that nobody in the middle — not Skynet, not the ISP, not anyone — can see what's being transmitted, |
| 25:45 | because it all goes encrypted. This whole tangle of certificate chains, digital signatures, |
| 25:52 | asymmetric key pairs — it's the implementation of a "triangle of trust." Security is when |
| 25:58 | John and I both trust the same third party, which is an authority recognized by both. |
| 26:03 | For there to be trust, there always needs to be a third element that both sides trust. |
| 26:09 | Back to the original question: how can I trust John's public key? How do I know Skynet isn't sending me a forged key, impersonating John? And the |
| 26:19 | answer is: because both my machine and John's were initially set up |
| 26:24 | by his mother. Mama Sara Connor made sure to install one of her root certificates on both |
| 26:30 | machines. When John sends me his certificate, I just have to check if it's signed by Sara's certificate. |
| 26:36 | And I'll know that because I also have her CA certificate on my machine, |
| 26:41 | just like the Google example I showed. And with that, humanity still has a chance against Skynet. |
| 26:47 | To wrap up this section, we've already seen how to use certbot to generate a new digital certificate, |
| 26:52 | signed by Let's Encrypt, ready to put on my web server. But I can already use it right here in the |
| 26:58 | terminal. For that we can use openssl to extract just the public key that's inside this certificate from the terminal as I'm showing. OpenSSL passing x509 which is |
| 27:09 | the certificate format, passing the certificate file and asking it to extract the public key |
| 27:15 | to this pubkey.pem file. We can cat that file and voilà — there's the Base64 of the key. |
| 27:23 | Having the public key, to encrypt any message or the symmetric key, like my "key.bin" from the beginning of the video, just use openssl to encrypt as I already showed |
| 27:31 | earlier. But there's a catch. I won't be able to show this because the public key that I extracted from the certificate generated by certbot is an ECC elliptic curve. Remember why I |
| 27:41 | used RSA in the earlier example? Because OpenSSL can't encrypt arbitrary messages |
| 27:47 | with ECC, remember? That was the whole reason I did an example with RSA. Unlike the example of encrypting a symmetric key directly using the RSA public key, |
| 27:57 | with elliptic curve, what happens in a browser is another process called "key exchange." |
| 28:03 | A popular method uses Diffie-Hellman which I explained in |
| 28:09 | my old cryptography video, or ECDH which is the elliptic curve variant. It's |
| 28:15 | out of scope for this video to explain the details, but research ECDH. |
| 28:20 | In summary, the browser already has a process implemented just for exchanging symmetric keys |
| 28:25 | using those asymmetric keys — you don't have to do it manually like I'm showing in the terminal. Elliptic curve is more efficient and more sophisticated than |
| 28:33 | old RSA. But RSA is sufficient and easier to demonstrate step-by-step |
| 28:38 | in the terminal. The goal of the video isn't to make everyone a cryptography expert here, just to get your feet wet so you go find the more advanced approaches yourselves. |
| 28:48 | It's also not the goal of this video to explain the security architecture of web applications. I only used the TLS example to explain the usefulness of asymmetric keys. Many |
| 28:58 | people still have the image in their head that cryptography is merely a single |
| 29:04 | very long secret key. Or even like the movies show — an actual physical key. Did anyone watch the latest Mission: Impossible? They spend the whole movie literally chasing after a |
| 29:13 | key split into two... that's not how key pairs work. But anyway. Now we need to be on the same page about another critically important concept: fingerprints |
| 29:24 | and digital signatures. Again, I won't detail what I already explained in the first |
| 29:29 | cryptography video. Understand it this way: there are various hashing functions like SHA512, which is one of the most |
| 29:35 | commonly used. There are some that are already known to be defective and weak, like the old MD5. MD5 |
| 29:42 | should not be used for digital signatures because it's not hard to create collisions — but that doesn't mean |
| 29:47 | it's useless. Depending on the use case, it's still used. SHA1 is the same — avoid it. |
| 29:54 | The SHA512 function has that name because regardless of what we pass to it, the result will always |
| 30:00 | be a 512-bit binary number, represented as a 128-character string showing |
| 30:06 | the binary in hexadecimal format to make it easier to copy and paste text. For |
| 30:12 | demonstration, we need the "sha512sum" program. I think most Linux distros come with it |
| 30:18 | pre-installed. For Arch-based distros it's usually in the "coreutils" package. |
| 30:24 | Let's take that "test.txt" file we used earlier which had the content "Hello World." If we run "sha512sum test.txt" it'll return this string: |
| 30:35 | Look at that. "Hello World" is super short, but even so the hash result is always fixed — |
| 30:41 | a 512-bit number. Let's edit that file and make a trivial modification. Just |
| 30:47 | add a period at the end of the file. We run the same "sha512sum" command and look at the result — |
| 30:52 | it's a completely different new hash. This property is what makes hashes important. |
| 30:59 | Compare the hash from before and the new one. Despite just adding a single period at the end, |
| 31:05 | the hashes are completely different. You can't tell they came from nearly identical files. And that's the point. That's why they serve as fingerprints. A |
| 31:15 | human reading a longer text could miss a misplaced punctuation mark. In an important document — say a contract — a misplaced zero can |
| 31:24 | mean the difference between committing to pay $100,000 or $1,000,000. |
| 31:29 | If the contract is 50 pages, most of us humans would miss it. But if the original document has a fingerprint, just |
| 31:37 | run the new document through "sha512sum" and see if the hash still matches. If it does, |
| 31:43 | we're certain the document is intact and wasn't tampered with. However, if the number is different, |
| 31:48 | we know for certain it was tampered with and cannot be trusted. We don't know where it was tampered with, |
| 31:54 | but we know that it was. Remember the previous episode on data recovery? That's how a file system like ZFS or BTRFS knows a file might be corrupted. |
| 32:05 | Another example. I go to the site of my favorite distro, Manjaro, and download the ISO to install. It's a 3.7 gigabyte file. Let's say I downloaded it on a public network — |
| 32:15 | like at an airport or a Starbucks. How can I guarantee that nobody intercepted my request and sent me a fake file? Where when I go to install, it'll actually install malware? |
| 32:25 | Once on a trusted network, like at home or the office, I can download this checksum file with the extension .iso.sha512. Now I can run the |
| 32:35 | following command. sha512sum passing that SHA file and the downloaded ISO. |
| 32:41 | If it returns "OK" everything is fine — but what did it do? Let's open the .iso.sha512 file. |
| 32:47 | It's a big number in the format of sha512sum's output. The company that makes Manjaro, |
| 32:53 | which created the original installation file, generated the sha512 and saved it in that file for us. |
| 32:59 | We can simply calculate the sha512 on the 3.7-gigabyte ISO with the "sha512sum" command, |
| 33:06 | just like we did with the Hello World file, and look — it generated exactly the same hash. With this we know that not a single bit of the 3.7 gigabytes |
| 33:15 | was tampered with. If even one bit had been corrupted during the download, the generated hash would be |
| 33:20 | completely different. With this we know the ISO is valid and we can install it. |
| 33:26 | Remember my videos about Git? Doesn't that string look like a commit identifier? |
| 33:32 | Except in the case of commits it's shorter. That's because Git uses SHA1 instead of SHA256. SHA1, |
| 33:38 | like MD5, is also no longer supposed to be used, but it's hard to migrate to SHA256 without breaking compatibility and causing confusion in everyone's heads — |
| 33:48 | so we haven't switched to SHA256 yet, but Git will probably change someday too. The reason we no longer use MD5 is because a bug was discovered in its process that |
| 33:57 | makes it reasonably easy to generate collisions. That is, if we modify a given document |
| 34:03 | carefully, in the right bits, we can change the content and at the end MD5 will generate |
| 34:09 | exactly the same hash. That defeats the purpose. It was discovered that this can be done with SHA1 too, |
| 34:15 | but it's not as trivial — even so it's not impossible. It's not practical, but it's statistically possible, and that's enough to consider stopping its use. |
| 34:24 | Two different contents that generate the same hash — we call that a "collision." Sooner or later, |
| 34:30 | collisions happen. It's statistically inevitable — but it's very hard to control a collision to happen exactly when we want |
| 34:39 | with SHA256 or a better function. But for MD5 and SHA1 we already know how to control the collisions — |
| 34:44 | add extra bits that can be ignored just so the file ends up landing on the same hash. |
| 34:51 | I explain in the cryptography video about hashes used to avoid storing passwords in plain text |
| 34:56 | in a database — watch it afterward because it's important to know. But in case you don't: it's considered a certificate of stupidity to store users' passwords in plain text in a table in your |
| 35:07 | database. It's also idiotic to think you're being clever by generating the hash of the password and storing it in a |
| 35:12 | table. You need salt. And there are better algorithms than others. Watch afterward to understand. |
| 35:19 | The main point is this: when a given piece of content — a file or document — has secret |
| 35:25 | content, the right move is to encrypt the entire file using an algorithm like AES with a nice |
| 35:31 | long, strong key. But for various uses where you just want to identify if it was tampered with — |
| 35:37 | like a contract — you don't need to encrypt the whole file. Just encrypt the fingerprint, |
| 35:42 | which will be shorter. An example of this is the ISO download from Manjaro's site. It's wasteful to encrypt an entire ISO — there's nothing secret inside. It's a |
| 35:52 | public file anyone can download and install for free. The problem is knowing whether the downloaded ISO |
| 35:57 | wasn't tampered with along the way. For that there's the ".iso.sha512" file. But there's |
| 36:03 | another file on their site too — look — they call it a signature and it's a ".iso.sig" file. We can't list it because it's a binary file, but it's the signature of the ISO's hash. |
| 36:15 | The problem with a .sha512 file is that if we download both at the same time, if the ISO was tampered with along the way, certainly the .sha512 file was also tampered with. That's why |
| 36:25 | in the example I deliberately said the scenario is that I downloaded the ISO at the airport |
| 36:31 | but then downloaded the .sha512 file when I got home, on a trusted network. But we don't need to trust the network to check these things. |
| 36:39 | Before leaving home, the right move is to have the "GNUPG" package installed — the famous GPG, |
| 36:46 | which is the implementation of the OpenPGP standard, Pretty Good Privacy. It's another package that makes |
| 36:52 | use of the concept of asymmetric keys, like in the TLS example with RSA or elliptic curve, remember? |
| 36:58 | Public and private keys? Except in the previous example we were dealing with |
| 37:03 | .pem certificates for web servers. GPG is similar, but for identifying people — not servers. |
| 37:10 | With GPG installed — in my case, Manjaro — I would have already downloaded the |
| 37:15 | Manjaro team's GPG keys. Just download the file with "wget" and install with "gpg" like this: |
| 37:22 | Remember the concept that the OS or browser brings root certificates from |
| 37:28 | certificate authorities? Those files in "/etc/ssl/certs"? The concept |
| 37:33 | is similar. This "manjaro.gpg" file has the trusted keys of the |
| 37:38 | Manjaro team. Everything the team there signs, we can now verify. |
| 37:43 | I did this at home — now I'm at the airport and decided to download the Manjaro ISO. A |
| 37:49 | public network is the opposite of trustworthy. That's why we always recommend using a VPN. But let's say |
| 37:54 | I'm not on a VPN and still want to risk downloading the ISO. How do I know it didn't arrive tampered? Some clever hacker spun up a server from their laptop, |
| 38:03 | tampered with the DNS on the airport's router, and now every download I make is actually malware. |
| 38:09 | We also download the ".iso.sig" file and can verify with the following command. GPG verify the .sig file and the ISO file. |
| 38:17 | Inside that signature file is the ISO's hash, signed by the Manjaro Build Server. It |
| 38:24 | checks the hash and says "Good Signature" — so the ISO binary at least matches the hash |
| 38:30 | inside the signature. But there's a small bug that apparently has existed for years in Manjaro: the key from this build server couldn't be confirmed. I don't know why it doesn't come |
| 38:39 | pre-installed as it should — when it tries to check, it gives this warning. The right thing was to have the root certificate for the build at manjaro signing key already on my system, but apparently it's not there. |
| 38:45 | A Manjaro bug that hasn't been fixed to this day. If that changed, let me know in the comments below. |
| 38:56 | The entire point of this exercise was for you to have in your mind what a hash is, a fingerprint, and a digital signature. Let me expand the ISO download example |
| 39:03 | to something many of you have probably used at least once in your life: BitTorrent. Again, the goal of the video isn't a detailed explanation of BitTorrent — |
| 39:13 | so look up the documentation afterward. I want you to be able to understand the cryptographic concepts it uses and how they solve the problem of distributed files. |
| 39:24 | Let's go. On the Manjaro site itself, I can download a .torrent file. A normal download, |
| 39:30 | which is the link on the side, will pull the 3.7 gigabytes directly from Manjaro's server. But with |
| 39:36 | this .torrent file, the expectation is to download it even faster or with more stability |
| 39:42 | because I'll be downloading pieces of the ISO from various different peers across the internet. Everyone who |
| 39:48 | downloaded the ISO and left their BitTorrent program running is sharing the same file. I |
| 39:54 | can download pieces in parallel from many different people. That's the basic idea of BitTorrent. |
| 40:01 | History tangent. In the 90s the internet was much slower than today — dial-up modem connections. In the server world everything was super immature. |
| 40:10 | Nobody knew how to maintain decent download servers, and bandwidth was expensive. It was terrible, |
| 40:16 | and in the middle of this emerged the first file-sharing services — a.k.a. piracy — |
| 40:22 | like the legendary Napster, followed by copycats in the 2000s like Limewire, Kazaa, eDonkey, and others. |
| 40:29 | But the principle at the time was just a way to tell other people which files you had |
| 40:35 | on your machine to share and let everyone download freely. It's the simplest model of file sharing. There were years of controversy — |
| 40:44 | various lawsuits from the music industry — culminating in the rise of the first |
| 40:49 | commercial music sales services and then subscription services like iTunes and today Spotify. |
| 40:55 | The major flaw of that simple sharing model was that it was very easy to identify who had the files and go after that person directly, |
| 41:05 | taking down the sharing. Once you shut down someone's machine, the files disappear and nobody can download anymore. That was the problem to be solved. The problem still |
| 41:14 | hasn't been completely solved, but let's see how BitTorrent radically improved our situation. |
| 41:20 | First and foremost, we need to do away with the concept of a single, centralized file server |
| 41:25 | from which everyone pulls. It's the same problem as Manjaro's ISO server. If everyone goes |
| 41:31 | to the same place to download, the more people discover the server, the slower it gets for everyone — and the greater the risks of that server going down or being taken down, leaving everyone with nothing. |
| 41:41 | Remember my series on storage, file systems, and all that? What is a file? It's just a string of bits. Under the hood, |
| 41:49 | they're organized as blocks of bits. We can slice a file however we want and |
| 41:55 | reassemble it later. That's actually how they're stored on HDDs and SSDs — out of order. |
| 42:00 | Let's simulate this exercise in a Linux terminal just to get the picture in your head. |
| 42:05 | We can do this with any file — text or binary. I already explained that for the computer there's no difference at all — underneath it's all just a string of bits. It's only for |
| 42:15 | humans that there's a difference, because we can open and read text files. As an example, |
| 42:21 | I grabbed the script from episode 142, which was the ChatGPT explanation. That |
| 42:26 | script is 94 kilobytes — that is, 94,000 characters. I want to split it into |
| 42:31 | equal files of exactly 10 kilobytes each, to simulate 10-kilobyte blocks. |
| 42:37 | For that we use the "split" command available in Linux. Just pass the size of each piece, |
| 42:43 | the original file, and the prefix for the piece names — I'll call them "chunk." |
| 42:48 | Done. Obviously only the last file will be less than 10 kilobytes, but see how it split perfectly. I can try cat'ing any piece and |
| 42:57 | it'll show the corresponding part of the script. Breaking large files into smaller pieces was something we did all the time in the 90s because it was very risky to try to |
| 43:06 | download a giant file. The modem could disconnect mid-download, corruption-checking algorithms weren't widespread yet — noise on the line could corrupt the |
| 43:16 | file. If it came corrupted, you had to download everything from scratch again. |
| 43:22 | So we spread the risk. It was better to schedule downloading one piece at a time. |
| 43:28 | If something went wrong, only one piece would be corrupted, and you could download just that piece |
| 43:34 | separately later, instead of starting over from scratch. Today the HTTP protocol itself supports |
| 43:40 | resuming a download from the middle, and the TCP protocol guarantees packets won't come corrupted, |
| 43:46 | as I already explained in the networking series. But I'm talking about an era before those conveniences. |
| 43:52 | And now you already know. One way to manually check if my pieces came correctly would be to |
| 43:57 | have a file with the hash of each piece. That way we can compare the hash of the download |
| 44:03 | and see if nothing was corrupted. Remember? Since I'm talking about the 90s, we could do SHA1 of each piece. For example, here's the hash of the first piece with the sha1sum command: |
| 44:14 | With a bit of shell script magic, we can do the same for all the pieces and put them in an "index.txt" file like this — for each file |
| 44:24 | starting with "chunk," generate the sha1 and keep adding it to that index.txt file. |
| 44:31 | That's why it's interesting to learn shell scripting. Opening the "index.txt" file with |
| 44:37 | "cat" we have the name of each piece followed by its SHA1 hash. Look how the sha1 of the |
| 44:43 | first file matches what we generated by hand before. So it's correct. Additionally, this file tells me exactly the total set of pieces I need to download. We could |
| 44:52 | write another script to download each piece, check the SHA1, and if it comes wrong, have it redo the download for just that piece. I'll leave that as an exercise for you. |
| 45:02 | OK, we downloaded all the pieces. Now what? How do we reassemble the original file? |
| 45:08 | Simple — just "cat" all the pieces and redirect to a final file, |
| 45:13 | like this: cat chunk-asterisk redirect to restored.txt. |
| 45:18 | This works on modern shells because most always list files in alphabetical order. If |
| 45:24 | yours doesn't, you'd first need to use the "sort" command — again, that's an exercise. But |
| 45:30 | assuming cat picked up each chunk file in the right order, how do I know that restored.txt |
| 45:36 | is really identical to the original? You already know, right? Just compare the hash of both. And as you can see, |
| 45:42 | it's exactly the same. If even one bit had come in wrong, the hashes would be different. |
| 45:47 | Are you understanding how we can manipulate any type of data and guarantee its integrity via |
| 45:54 | cryptographic tools? Knowing these concepts, I'll give an overview to explain how BitTorrent takes advantage of what I just described. |
| 46:03 | There are two ways to download a file via Torrent. One is downloading a .torrent file, |
| 46:09 | like the one from the Manjaro site. We can use the "transmission-show" program that comes in the "transmission-cli" package to open and view the contents of that file. |
| 46:18 | The important thing about this file is that it identifies what we're going to download — in this case the ISO — and where we can find that file. First we have this so-called tracker. A tracker is |
| 46:28 | a server that contains lists of peers that are online and have the file with this |
| 46:34 | hash. If there's at least 1 active peer that's a seeder, the download will start. A peer |
| 46:40 | is the name we give to any machine — PC, server — participating in that network. A tracker doesn't necessarily have the file or its pieces, but knows who might, which are the peers. |
| 46:51 | You've probably already seen this nomenclature in torrent programs like qBittorrent or Transmission. The more seeders that are active, the better the download will be. Seeders are computers |
| 47:03 | online that are also sharing the same file or pieces. Leechers |
| 47:08 | are computers online doing a download but not contributing anything — just leeching. |
| 47:13 | The BitTorrent algorithm tries to be fair and lets the download be |
| 47:18 | faster for those who contribute and slower for those who are just parasites. Trackers just share and sync the list of peers. Peers can be both seeders and |
| 47:29 | leechers. More seeders = faster download. More leechers and fewer seeders = |
| 47:35 | slower download. The ideal world is everyone being a seeder. Some are jerks and quit anyway. |
| 47:41 | Others genuinely can't contribute because their ISP blocks it and they don't know how to punch through the firewall. I talk about punching through firewalls in the networking series. Look up |
| 47:52 | how to enable ports, use VPN for torrenting, etc. — I won't cover that today. Let's go back to the .torrent file. Look at the other information it gives us. We know |
| 48:01 | that the ISO is 3.7 gigabytes, as I've repeated many times, and we know this torrent is organized into 1,769 pieces of 2 megabytes each. |
| 48:10 | Remember the chunks I made using the split command? Same idea. It doesn't show here, but inside this torrent there will be a list of pieces followed by the hash of each piece, |
| 48:20 | similar to that "index.txt" file I made in the example. Each seeder the tracker knows will have either the complete file or a partial file, because it |
| 48:30 | hasn't finished downloading yet. Now I, who just started the download, start downloading each of those |
| 48:35 | pieces from each available seeder in parallel. For example, let's say the network has |
| 48:41 | seeder John, seeder Sara, and seeder Kyle. And I'm downloading that script file. |
| 48:47 | I start downloading chunk_aa from John, chunk_ab from Sara, chunk_ac from Kyle, and so on. |
| 48:54 | Every time a chunk finishes downloading, I can check the hash and know it's correct, then request the next chunk, distributing the load across all seeders. If someone else shows up |
| 49:05 | requesting the same file, maybe they'll download a chunk from me. Get it? A seeder doesn't need to have the complete file to start contributing — just having at least one complete |
| 49:14 | chunk is enough. And that's why the more people there are, the lighter it gets for everyone — especially for Manjaro's main server. That's the basis of distributed computing. |
| 49:24 | If there are no active seeders, the .torrent file points to a Webseed — the link |
| 49:30 | to the original file on Manjaro's server. Then it would be like a regular direct download. |
| 49:36 | Understood so far: with a list of pieces and their respective hashes, distributed across |
| 49:42 | various computers in a swarm, each downloading a piece from another computer's machine, |
| 49:48 | until everyone has the complete file — that's the basic architecture behind BitTorrent. |
| 49:53 | BitTorrent is "decentralized" in the sense that, unlike Apple's iTunes, |
| 49:59 | there's no single company and no single server centralizing the downloads. Here are some mechanisms that make BitTorrent resilient, though not completely invulnerable. |
| 50:10 | Right off the bat, we might think: if we take down whoever maintains the trackers, we could stop a swarm, right? |
| 50:16 | First, there isn't only one tracker — there are various trackers serving as backups for |
| 50:22 | each other. You'd need to take down every active tracker in the world. But that wouldn't be enough. |
| 50:28 | Every time you open a program like Transmission or Nano Torrent, it does "bootstrapping" using a list of "bootstrapping nodes" — a list of well- |
| 50:38 | known nodes on the network that we believe are usually online, several of them. These nodes |
| 50:44 | help us find other nodes. Like trackers, they're also not single points of failure. |
| 50:50 | When your program connects and finds a tracker or bootstrapping node, it joins the DHT network — the Distributed Hash Table. Each node that enters the network stores information |
| 51:01 | about the entire network or a piece of the network. So when you ask the DHT for something, |
| 51:07 | your BitTorrent client sends a request to a node it knows. That node will either have the information and return it, or will direct you to another node that might know |
| 51:16 | the answer. From that point on, you — as a node on the network — have that information and can respond |
| 51:23 | to someone who asks you too. Everyone becomes a backup and contributes for others. |
| 51:28 | The concept of trackers is a bit outdated — from the first versions of BitTorrent. |
| 51:34 | It has evolved, and now we have the concepts of DHT and PEX — Peer Exchange. Even taking down |
| 51:40 | all the trackers, every person connected to the network contributes to distributing the information |
| 51:45 | for the rest of the network. Nowadays BitTorrent programs implement both methods. |
| 51:50 | I talked about the .torrent file we download to start a download via BitTorrent, but we don't even need that file. You've probably seen what's called a magnet link — |
| 52:00 | a type of URL using the "magnet" protocol. Remember the .torrent file for the Manjaro ISO we downloaded? |
| 52:06 | We can generate a link from it using the "transmission-show" program with the "-m" option: |
| 52:12 | That's the link found on various sites that list torrents for download. See on a Pirate Bay for example — there's that magnet icon. When you click it, |
| 52:21 | it automatically asks to open your installed Torrent program. The most important part is this "btih" right at the beginning — the BitTorrent InfoHash — the hash that uniquely identifies this |
| 52:34 | ISO file. The rest helps but is optional. For example, it has the link to the webseed in case |
| 52:40 | nobody's sharing the file on the network, and the link to a tracker. Let's make a dumb HTML page with a link for that magnet. A link |
| 52:48 | with the full URL that was generated, and a second link with just the infohash. |
| 52:53 | If we open it in a browser and click the link, the media type is associated with qBittorrent |
| 52:59 | installed on my Manjaro. It opens and offers to start downloading. If I open by the second link, |
| 53:05 | even without webseed or tracker info, just the infohash, look — |
| 53:10 | it opens normally and offers to download the same way. That's because qBittorrent on my machine |
| 53:16 | joined the network via DHT and PEX and managed to find the seeders and already knows how to start downloading. |
| 53:22 | Get it? To stop a file from being shared, it's not enough to take down all the trackers — you need to stop 100% of everyone who's sharing the file, from all parts |
| 53:33 | of the world, simultaneously. If just one node in the network is functioning, you can keep sharing, |
| 53:38 | because via DHT and PEX, that information will be redistributed. Distributed computing is fascinating because of this: nobody can stop it with a single stroke of a pen without |
| 53:48 | compromising the entire internet from working properly. That's why I love this concept. DHT and PEX are fascinating topics on their own for guaranteeing network decentralization, so I hope |
| 53:59 | you'll research them more afterward. Great topic for a thesis. But there's a less |
| 54:05 | commented topic that I find even more interesting: the concept of Hash Trees, or Merkle Trees — |
| 54:11 | named after the concept's creator, Ralph Merkle, who invented this in the late 70s. |
| 54:17 | Let's go. What we have so far is an "index.txt" file with a list of chunks or pieces of that script file. 10 pieces with the SHA1 hash next to each one — |
| 54:27 | remember? In a rudimentary version of BitTorrent, I could have downloaded that file and asked the Distributed Hash Table — the DHT — where to download each piece, |
| 54:37 | identified by the SHA1, which serves as a unique ID for each piece. After downloading each piece, I just run the "sha1sum" command |
| 54:46 | and compare the hash with what's in the "index.txt" file. If it matches, it came correct — |
| 54:52 | not corrupted or anything. Finally, I just concatenate the pieces as I did before, generate the hash of the whole file, compare it to the master hash of the original file — to guarantee |
| 55:01 | I have the same file at the end. Sounds simple, and sounds like that's enough. |
| 55:07 | But in the real world there are various reasons why this isn't sufficient. For starters, via BitTorrent we can transfer files of any giant size. I can |
| 55:16 | share entire directories with thousands of files. I could make a torrent of my entire |
| 55:22 | Windows C: drive if I wanted. And I can pull pieces from various different nodes in |
| 55:27 | the swarm. To validate the hash of everything that way wouldn't be practical. Imagine having to compute the master hash of your entire HDD to |
| 55:37 | know if what you downloaded is correct. That would be too heavy — in some cases even infeasible. In programming, you'll always run into this case: for a small file |
| 55:47 | of a few kilobytes or megabytes, the simple hash file scheme is more than sufficient. But at internet scale, where we might want to |
| 55:56 | handle gigabytes or terabytes, thousands of files in one torrent — it won't scale. |
| 56:01 | Think of it this way: we have 10 hashes — one per piece — and one master hash that validates the |
| 56:07 | complete file. I receive these hashes and start downloading from some node. This first |
| 56:12 | piece, chunk_aa, arrives — its hash starts with c3bb. I run sha1sum and see that, |
| 56:18 | yes, the hash starts with c3bb. Great. This only guarantees that the piece is what it says it is — |
| 56:24 | but how do I know that this piece actually belongs to the complete file? The only way is to download all 10 pieces, concatenate everything, run "sha1sum" on the generated |
| 56:35 | file, and compare with the master hash. Only then will I know that all the pieces are |
| 56:41 | truly valid for this file — understand? The individual hashes tell me nothing about |
| 56:47 | the complete original file. I have to trust that the node on the network that gave me this information didn't lie to me. Imagine if it were a torrent with multiple files |
| 56:57 | and many gigabytes. I'd only be certain everything is valid after downloading everything. |
| 57:03 | In BitTorrent, you've probably seen that we can choose to download only some of the files and not all of them. So right off the bat, this scheme of having a single master hash for everything doesn't |
| 57:13 | work. I need partial hashes — at minimum one per individual file — |
| 57:18 | right? And even then, I need to guarantee that this file — once I downloaded the pieces and assembled it — |
| 57:24 | actually belongs to the complete set, without having to download the complete set. How do you do that? |
| 57:30 | To simplify, let's go back to the example of 10 pieces. Imagine this could be a file of thousands of pieces and dozens of files in subdirectories. It's a simplification, |
| 57:39 | OK? So, I start by organizing these pieces into pairs: chunk_aa with chunk_ab, |
| 57:45 | then chunk_ac with chunk_ad, and so on. Pairs of pieces. |
| 57:50 | Now we take the hash of each pair and concatenate just those. For example, hash c3bb from chunk_aa with hash 79a4 from chunk_ab. I generate the hash of that combination. |
| 58:01 | It'll give a hash starting with "0285." I do the same with the hashes of the next pair — |
| 58:07 | it'll give a new hash starting with "84de" — and continue doing this for the other pairs. |
| 58:13 | In the end I'll have 5 new hashes. Now I repeat the same process. I organize pairs of hashes, |
| 58:19 | concatenate them, and generate a new hash for each pair. Take this hash starting with "0285" |
| 58:24 | with the hash starting with "05e4" and generate the hash starting with "9361." I do this for |
| 58:30 | the second pair. Only at the third pair will I have a problem because the last hash will be alone. No problem — I generate its hash too, concatenated with empty. |
| 58:38 | Let's repeat one more time. Hash pair "9361" with "910e" gives "bdf3," and the last |
| 58:44 | hash is "2354." And done. We've reached the end — we only have two resulting hashes. We generate the hash of |
| 58:51 | the concatenation of those two as well. It'll give a final hash starting with "f2fb." This hash is special — |
| 58:57 | it's what we call the Merkle Root. It's the hash that encompasses all the other hashes. |
| 59:04 | Before, if I only had the master hash, I'd need all 10 hashes of each piece to know if |
| 59:10 | everything is correct. But in this Merkle Tree scheme, let's say I want to know if piece "aa" that I just downloaded really belongs to the final file, without downloading the other pieces — |
| 59:21 | how do I do it? I ask the server only for the hash of its sibling "ab." With that I can calculate "aa" and |
| 59:27 | "ab" as I did before. Then I need the server to send me the 4 hashes "acad," "aeaf," "agah," "aiaj." |
| 59:35 | Having just those 4 hashes, plus the hash of piece "aa," I can recalculate the tree and |
| 59:41 | find the Merkle Root and compare it to what the server indicated. If it matches, it means the piece I downloaded is part of the final file. Repeating: |
| 59:50 | I reduced the requirement from all 10 hashes to just 4 hashes — get it? |
| 59:56 | Again, this is a super small, simple example just to fit on screen. But look at that Manjaro ISO example — remember? There were almost 1,800 pieces. If |
| 1:00:05 | I download just one piece, to guarantee it really is part of the original ISO, I'd need to compute the master hash using all nearly 1,800 hashes. But |
| 1:00:14 | organized in a tree, I'd only need about log2(2048) = 11. |
| 1:00:20 | The tree needs to be balanced, and the next number above 1,800 that balances a binary tree is 2048. So I need the server to send me the pre-calculated Merkle Root and |
| 1:00:31 | about 11 hashes from that tree — more or less. That's not an exact number with log. |
| 1:00:36 | But understand that 11 is an order of magnitude fewer hashes than 1,800. Even |
| 1:00:42 | in this simple example of just one Manjaro ISO, we already have a significant gain. |
| 1:00:47 | BitTorrent wasn't built with Merkle Trees — that's a more recent addition. Just as |
| 1:00:53 | you no longer need trackers today because of DHT and PEX. It's still an evolving technology. |
| 1:00:59 | Remember what I said in the databases video: trees are the most important data structures in computing — everything is trees. In this case, binary trees, |
| 1:01:07 | but I've already talked about B-trees or B+Trees in file systems. Watch my Trees video afterward. |
| 1:01:13 | Know what other program benefits from Merkle Trees? Git. What are commits? |
| 1:01:18 | They're diffs with sections of source code files, plus metadata — like the filename, |
| 1:01:24 | author of the change, dates. An important characteristic of a commit is that it's identified by a hash — an SHA1 of its content. It's how we know the content wasn't tampered with, |
| 1:01:35 | the same way we checked the chunks of the BitTorrent download. But a Git commit has another important characteristic: it contains the SHA1 of the previous parent |
| 1:01:46 | commit. That's why commits form a chain — more specifically, a tree. Directory tree objects |
| 1:01:52 | also have SHA1s of their child objects. All of this forms a DAG — |
| 1:01:58 | a Directed Acyclic Graph — more specifically a Merkle DAG. |
| 1:02:05 | An important characteristic is that since every commit contains the SHA1 of the previous commit, it's impossible to modify just one commit in the middle of the tree. You'd need to rewrite all the commits |
| 1:02:16 | ahead of it and regenerate new SHA1s for all of them. This is what we call "rewriting history." You've |
| 1:02:22 | probably heard this in discussions about whether it's better to merge or rebase, and everyone is against rebasing on master because it "rewrites history." That's what rewriting |
| 1:02:31 | history means: you have to regenerate the SHA1 of all commits going forward. |
| 1:02:36 | Let me quickly show an example. Let's initialize a new repository with "git init" and create a silly test file just to create the first commit. |
| 1:02:45 | Running "git log" we see the commit identified by the hash starting with "4b4c." Now let's |
| 1:02:51 | create a new branch called "teste," modify the file, and create a new commit. It created a new commit identified by the hash starting with "65c2." |
| 1:03:01 | Now I'll go back to the master branch, create some new file, and save it in another |
| 1:03:06 | commit. Look — it created this commit with hash starting with "9431." Now, |
| 1:03:11 | instead of merge I'll rebase the test branch on top of the master branch with "git rebase teste." Since I didn't do anything drastic, it'll finish without any conflicts. |
| 1:03:21 | We run "git log" and look — the commit I had just made, which had the hash starting |
| 1:03:26 | with "9431," now starts with "ee00." That's because before, the previous commit was the "initial commit" |
| 1:03:33 | with hash "4b4c." Since I rebased, it brought in the "adding hello again" commit with hash "65c2," |
| 1:03:41 | which becomes the new parent of the "adding teste" commit — therefore that commit's hash has to |
| 1:03:47 | be recalculated, which is why it changed to "ee00." That is, we just rewrote history. |
| 1:03:53 | This concept is very important. By putting the SHA1 of the previous commit inside the current commit, |
| 1:03:58 | we create a dependency between those two objects. If the previous object changes — if its hash changes — the hash of the following object gets invalidated and needs to be recalculated |
| 1:04:09 | too. You can't just shove a commit in the middle of the chain without consequences, |
| 1:04:14 | and that's what guarantees the integrity of the source code stored in that repository. If someone tries to tamper with a commit back in the past, they'll be forced to |
| 1:04:23 | rebase everything forward — that is, recalculate the SHA1 for everyone. Then |
| 1:04:28 | everyone will immediately know the repository was modified, because the IDs of everything will be different. That's where we have to deal with conflicts afterward. If you've never stopped to understand how |
| 1:04:37 | Git actually works, I recommend watching my "Understanding Git" video. Understand: having a Merkle Tree doesn't prevent a commit from being tampered with. It only makes it easier |
| 1:04:48 | to identify when it has been. And it makes it cheaper to run those calculations to reach that conclusion, |
| 1:04:53 | than having to check the SHA1 of 100% of everything. In the case of Git — a decentralized repository — |
| 1:04:59 | let's say it was a team of 5 people. One of them does a pull from GitHub and notices that someone |
| 1:05:04 | screwed up and did a "push --force" of a giant rebase that rewrote hundreds of commits. |
| 1:05:11 | You can see that happened and can call one of your other colleagues who hasn't done "pull" yet, and ask them to do a new "push --force" to restore the history as it was |
| 1:05:22 | and eliminate the mess. The fact that we have multiple copies of the same repository on everyone's |
| 1:05:28 | machines is a type of backup. If the elected main repository got messed up, there are ways |
| 1:05:33 | to recover. And you don't need to overwrite everything — just from the commit where the rebase happened. Understand? |
| 1:05:39 | There are various discussions about Git centralizers like GitHub or GitLab. They centralized |
| 1:05:45 | trust in Git within themselves, but Git was originally not meant to have a single point of failure. You |
| 1:05:50 | can do a git clone of someone's repository locally, on a flash drive, as I showed in the previous episode. You don't have to |
| 1:05:58 | do a git clone from a GitHub repository. That's another discussion — just so you know that Git |
| 1:06:03 | was also designed to be distributed, but today we use it centralized on GitHub and such. |
| 1:06:10 | Back to the BitTorrent example. Since any computer on the internet can participate in file sharing, yes, some malicious computer could start trying to |
| 1:06:19 | spread tampered binaries. But the main thing is the .torrent file or magnet link pointing |
| 1:06:25 | to some node we normally trust, which will provide us with the Merkle Tree with the hashes. Having the hashes, we can check whether the pieces we downloaded are valid or not. |
| 1:06:35 | These hashes are organized in a big table — more specifically a distributed table, |
| 1:06:41 | or Distributed Hash Table — the DHT I keep mentioning. For web developers, |
| 1:06:46 | it's similar to a DynamoDB. Each item in that big table gets a long 160-bit ID. And the |
| 1:06:52 | possible IDs are partitioned among the various nodes in the network, such that each node is only responsible for a piece of the space of possible IDs. |
| 1:07:03 | Every time a node needs to register something, it generates a key, and from that determines which node is responsible for the space of IDs that this new key belongs to, |
| 1:07:13 | and sends it to that node. Same thing for searching data in the table — having the ID to query, it asks the node responsible for that range of IDs. |
| 1:07:23 | A BitTorrent network is massive — thousands or millions of nodes at the same time. It's impossible for my |
| 1:07:29 | computer to know which ones are all the active nodes at this exact moment in the world. Instead, |
| 1:07:35 | each node maintains a type of routing table with information about a subset of nodes in the network — |
| 1:07:42 | preferably the "closest" ones in the ID space. When someone asks your node to store or read a certain ID but you're not responsible for it, |
| 1:07:50 | you can use that routing table to redirect to the right node. And of course, a node can simply disappear out of nowhere. Since each node |
| 1:07:59 | can be a home computer, someone might turn off their PC and leave the network. That's why this information is redundant across multiple nodes. The DHT |
| 1:08:09 | and routing algorithms dynamically rebalance and update themselves as nodes enter and exit. |
| 1:08:15 | If that seemed similar to a distributed NoSQL database like Amazon DynamoDB or Cassandra, |
| 1:08:21 | that's because it is. Three or four episodes back I explained how distributed keys work — |
| 1:08:27 | watch it afterward. BitTorrent is basically a giant distributed NoSQL database. |
| 1:08:32 | They're similar technologies. Every time you open a program like Transmission or qBittorrent to download something, you're participating in all this coordination |
| 1:08:42 | and becoming a replica node of a large distributed NoSQL database. You just didn't know that. |
| 1:08:48 | Unlike a database, I don't need all the data ever stored in a DHT |
| 1:08:54 | to stay there forever. New files appear, files nobody wants anymore disappear. If nobody is sharing a given file, I don't need to have |
| 1:09:02 | information about it flowing around. That would be inefficient. Only files someone is sharing matter. |
| 1:09:07 | In Git it's different — I need everything developers on the project have done: adding new files, modifying existing ones, or even deleting them — |
| 1:09:16 | to be properly recorded in the repository's commit log, and it must be possible to go back to any point in the past and have everything intact, exactly as |
| 1:09:24 | it was. It can't be partial. On the other hand, it can't get in the developer's way and add obstacles. If the developer decides they want to rewrite history, you have to let them. |
| 1:09:34 | The resilience of Git appears in a team — with more than one person. Just having one more |
| 1:09:40 | developer means we can compare repositories on each person's machine and see that something went wrong. Just check the hashes of the commits. With 3 developers we already have |
| 1:09:50 | a way to do a rudimentary kind of consensus: whoever has the most different history is wrong. |
| 1:09:56 | I only explained the very basic concepts — there's much more behind it for you to research later. Merkle Trees are useful for BitTorrent and Git, |
| 1:10:05 | but they're also used in other places. The ZFS file system used in TrueNAS for large storage servers also uses Merkle Trees |
| 1:10:14 | to detect data corruption and provide the snapshot functionality with low overhead. |
| 1:10:21 | Other peer-to-peer networks like IPFS — the InterPlanetary File System — |
| 1:10:27 | a global distributed file system, uses Merkle Trees, more specifically Merkle DAGs like Git. Not just file systems, |
| 1:10:35 | but distributed databases like Cassandra or Riak use Merkle Trees to minimize |
| 1:10:41 | the amount of data that needs to be transmitted for data synchronization. At the beginning of the video I showed the certificate chain and how my |
| 1:10:49 | domain's certificate is signed by Let's Encrypt which, in turn, is signed by ISRG. The TLS protocol uses a variant of Merkle Trees called Merkle Hash Tree, |
| 1:11:00 | in the Certificate Transparency framework, to provide an auditable log of generated certificates. |
| 1:11:06 | And this characteristic is important: anything that needs to be auditable |
| 1:11:11 | can use Merkle Trees to offer "proof of inclusion" — in a way where it's possible to prove that a |
| 1:11:18 | piece of data is part of a given set, without revealing the entire set. |
| 1:11:23 | And if you've ever stopped to study the basics of Bitcoin and other cryptocurrencies, you've probably come across Merkle Trees and Merkle Root. It's what's at the root of the block of |
| 1:11:33 | transactions in the so-called blockchain. A blockchain and a Git repository, or the Merkle Tree of |
| 1:11:40 | BitTorrent, are very similar: they guarantee you can't tamper with one block alone without having to re-generate all the blocks ahead of it. With one extra ingredient: |
| 1:11:50 | the mining process. In Git, a rebase is a reasonably fast operation. |
| 1:11:55 | But in a Bitcoin blockchain, the equivalent of a Git rebase costs absurdly more — |
| 1:12:02 | astronomically expensive really — which guarantees it's nearly impossible to do a rebase. That's |
| 1:12:07 | what makes blockchain interesting. A blockchain where rebase is cheap is no different from Git, and as a store of value it's worthless. Everything I explained |
| 1:12:17 | in this episode are the technologies at the foundation of Bitcoin. If you made it this far, we've seen in practice how encryption with symmetric keys |
| 1:12:26 | works. We learned how key exchange using asymmetric cryptography works. We saw |
| 1:12:32 | how to split files and transmit pieces in a way that we can check if the pieces |
| 1:12:37 | came correctly, and we saw how BitTorrent and Git work with Merkle Trees. Everything in |
| 1:12:43 | modern computing uses these concepts — in particular TLS digital certificates, NoSQL databases, and even Bitcoin. So it's important to study all of this. If you have |
| 1:12:54 | questions leave them in the comments below. If you liked the video, leave a thumbs up, subscribe to the channel and don't forget to share with your friends. See you, later! |
