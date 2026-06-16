# Discutindo sobre Banco de Dados - Dos primórdios a Big Data

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=Bfm3Ms2cTg0
- **Duração:** 1:29:04
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala. (Neste vídeo o YouTube serviu a
> faixa de legendas em inglês.)

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Hey everyone, Fábio Akita here — ever since I started this channel, databases have been one of the |
| 0:05 | topics I most wanted to cover, but I kept putting it off so I could explain the fundamentals first. The goal isn't |
| 0:11 | to teach you SQL or MongoDB or any other system in detail — it's to give perspective to people |
| 0:16 | who are just starting out: why the hell are there so many different kinds of databases, and when should you |
| 0:22 | consider one over another. This will be a higher-level video, not so much code in itself, but pointing to sites for you |
| 0:29 | to look things up in the respective documentation afterward. I'll start at the very beginning, and only by the midpoint will we start |
| 0:35 | getting into SQL. So let's go. |
| 0:43 | Unfortunately, if you were expecting a video about modeling, entity-relationship models, or RMS design patterns and |
| 0:51 | that sort of thing, this still isn't that video. The goal is to talk more about what happens under the hood — the technologies that |
| 0:57 | make up a database. I think modeling is only effective if you know how the underlying platform actually |
| 1:03 | works. If not, modeling turns into superstition and you just think your model is good without actually knowing |
| 1:10 | what it causes underneath. Everything you don't know how it really works turns into superstition. I always say that one of |
| 1:16 | the advantages I had was getting to witness version 1.0 of almost everything that emerged in the last 40 years. If you |
| 1:23 | take a modern database like MongoDB on AWS or Tigris, they have |
| 1:28 | dozens of features that aren't immediately obvious — what they were created for. Without knowing that, you end up |
| 1:34 | trying to use them in the wrong places, or think they're bad, or think you're the one who's dumb and can't figure them out. Think for a |
| 1:41 | second — what is a database? A first take: we could say it's a program that facilitates and manages |
| 1:47 | the storage of structured data. Think of a filing cabinet with drawers — each drawer |
| 1:52 | holds a type of form. The drawers would be our tables, and the cabinet would be the database. I think that's roughly what |
| 1:58 | most of you picture. For beginners, I think it's worth going back to fundamentals. That's why I |
| 2:04 | always say it's so important to learn the foundation — things like algorithms, data structures. The problem is that the |
| 2:11 | simplest structure to learn, and because of that, commonly used, are lists. Those would be the drawers — in particular, |
| 2:17 | linked lists or plain arrays. And if you stop there as your foundation from that point on, you'll have problems. Let's understand the |
| 2:24 | simplest database of all. A cabinet with a single drawer is just an array in |
| 2:29 | memory with records like a struct or an instance of a class or object. Remember |
| 2:34 | how a struct in memory looks — an integer array with 10 elements probably takes 10 times 64 bits, or 8 |
| 2:42 | bytes each — that's 80 bytes total. Every array has elements of the same fixed size, |
| 2:47 | always. If I want to grab the fifth element of that array, I just count four elements before it times 8 |
| 2:54 | bytes — so 32 bytes forward, I'll find the fifth element. If I know which position in the array I want, |
| 3:00 | it doesn't matter whether it's at the start or the end — access time is the same: constant. The array could have 10 elements |
| 3:07 | or 10 thousand elements — it takes roughly the same amount of time to access any position. When all my data fits |
| 3:14 | in RAM, every operation is easy. Even if I don't know the position, in the worst case, I just brute-force it with a |
| 3:22 | loop from first to last element until I find it. And that would be by far the dumbest way to search for something |
| 3:28 | in a list. But for small data sets, almost nobody notices the difference. But let me repeat — searching |
| 3:34 | data in a list with one big loop inside is the most absurdly backwards and unacceptable way to do it. And I'll say it |
| 3:40 | again to make it crystal clear: if you're doing a loop to search for items in a list, you're out of your damn mind. This is because |
| 3:48 | all programmers, especially beginners, always deal with small amounts of data. It's very hard to understand algorithm |
| 3:54 | complexity and the difference in processing times when you only have 100 thousand elements. Only when you start dealing with |
| 4:01 | hundreds of thousands, millions of elements will it start making a real difference. I'll get to that. Anyway, |
| 4:07 | imagine that back at the beginning of computing, everyone dealt with small amounts of data compared to today. That's why the first |
| 4:13 | solutions are simple. An array with fixed-size elements is the easiest thing to think of. And when you run out of memory — |
| 4:20 | say, a product list or a customer list, obviously no e-commerce fits everything in RAM — then we have to |
| 4:26 | think about writing that data to disk. And the simplest way to do that is the good old append-only flat file, |
| 4:33 | where you just keep adding new elements to the end of the file. Easy. Think of a record as a struct in C, or a class in |
| 4:41 | JavaScript or Python, just making sure that all elements have a fixed size. I |
| 4:46 | define a struct with the first field being the full name — say, 100 characters, each one represented by a |
| 4:52 | UTF-8 code of 8 bits — 100 bytes total. Then we have a phone number with area code — three characters, a prefix of |
| 4:59 | three digits like in the old days, and a suffix of four digits, plus parentheses and hyphen — 13 characters total, or 13 bytes. |
| 5:06 | We have a total of 100 bytes plus 13, which is 113 bytes. The first record occupies |
| 5:12 | the beginning of the file, starting at address zero and going up to address 112. The second record starts at byte |
| 5:18 | 113, goes to 225, and so on. I can open the file, seek to the end, and |
| 5:23 | write one more record. That's how you keep registering new records. As a curiosity, I wanted to use this to |
| 5:30 | show you the second programming language and environment I ever learned — after BASIC — which I learned as a preteen. |
| 5:35 | I think it was 1990, and I was around 13 or 14 years old. My dad had asked my uncle to bring a PC from Paraguay. It was a PC, |
| 5:42 | I think 286, 1 MB of RAM, 10 or 20 megs of hard drive, came installed with MS-DOS 3.0, and my |
| 5:49 | uncle had also left the program he used for work — dBase III Plus, from the old company Ashton-Tate. |
| 5:55 | And that was literally all that was installed. No internet back then. I didn't have any books or anything. By chance, a |
| 6:01 | cousin of mine was studying this stuff and lent me a course handout he was using. It was my first PC, so just |
| 6:07 | seeing it on and having a keyboard I could use — instead of a mechanical typewriter — I already thought it was incredible. |
| 6:13 | My first idea was to copy my cousin's handout. I typed the whole thing from scratch. I think it was in WordStar. This is WordStar — |
| 6:20 | it has a weird look because it's configured in 50-line mode, which some modes allow, instead of the usual 25-line CGA. |
| 6:26 | This version is one of the last ones that came out for DOS — I think it's 7.0. So it has help options that the early versions didn't |
| 6:33 | have, with a full menu with all the options. Otherwise the only way to use it was to memorize keyboard shortcuts, like Ctrl+P B |
| 6:40 | to enter bold mode. You repeat with Ctrl to go back to normal mode, Ctrl+P Y for italic, and so on. |
| 6:47 | It was so advanced it even had a print preview in graphical mode to show you how it would look on the printer. At that time |
| 6:53 | we were in the transition from the text mode of DOS to the graphical world of Windows 3. Many current text editors, like |
| 7:00 | VS Code or Obsidian, have a focused writing mode that puts the text in the center and hides all distractions — those are |
| 7:08 | inspired by old editors like this one. WordStar — this is the editor that George R.R. Martin reportedly uses to write |
| 7:15 | Game of Thrones. Anyway, small tangent to show how I copied the course handout as a kid. Later on I managed to |
| 7:21 | buy real books. I think there's no other language for which I bought as many books to learn as dBase and its |
| 7:28 | successor, Clipper. Check out the ones I still kept. And the reason for so many books is that back then there was no Google and no |
| 7:34 | Stack Overflow. Remember — after the web came along, I didn't need as many books. Opening dBase, there's a |
| 7:41 | dot prompt — a command interpreter — just like when you type node or Python, and you can start typing commands. But |
| 7:47 | it also has a menu system here to make things easier. Look — I can choose the option to create a new database. |
| 7:52 | Type in the field name, type character with 100 letters, then the phone field, type character as well, with 13 letters. I'll |
| 7:59 | go ahead and add a company field with 100 letters, and done. Then when I save it, it lets me start |
| 8:05 | entering records. Let's go — I want to add myself: Fábio, here's the phone, blah blah blah, company Goldman 42. Now I'm going to |
| 8:12 | register Wayne Ratliff, the creator of dBase, who later became vice president of |
| 8:18 | Ashton-Tate. Finally, let's register Brian Russell, who created the Clipper compiler for |
| 8:25 | Nantucket Corporation. None of these companies exist anymore. Ashton-Tate was acquired by Borland, which would later |
| 8:32 | become Inprise, then Embarcadero, and the division with dBASE — who still maintains Delphi, if I'm not mistaken. Nantucket |
| 8:39 | would go to CA, or Computer Associates, which since 2018 has been part of Broadcom. With all |
| 8:44 | the success they had in the '80s and '90s, they vanished to the point that today nobody even remembers them. Good reminder that nothing |
| 8:51 | lasts forever. Anyway, I finished entering my contacts. I can save and quit with Ctrl-End. Now I'm in |
| 8:57 | the dot prompt interpreter. I can open the database file by doing USE CONTACTS, then type LIST, and |
| 9:04 | look — it lists what I just registered. This is the grandfather of all CRUDs — the original CRUD in the world of |
| 9:10 | microcomputers. Not the first, but possibly one of the most popular. The file format its inventor created was |
| 9:18 | the famous DBF — literally dBase Format. When I was young, before jumping to newer technologies like SQL Server |
| 9:25 | from Microsoft, in my head a database is what you call a table. dBase saved one table per file and |
| 9:32 | called that a database. Today, a database is a server with sets of tables in it. In the late '80s, for me, |
| 9:38 | a database was a file — like a table. That file has some space reserved in the header for metadata — |
| 9:44 | information like total record count and things like that. But the records themselves all have |
| 9:49 | the same fixed size. In the contacts example, it's 100 bytes for the name, 13 for the phone, and same for the company, so |
| 9:55 | each record always occupies 213 bytes. You just skip forward by 213 |
| 10:01 | to advance to the next record. As a developer, you need to understand this structure. Say I |
| 10:07 | want to find Brian's phone number — how do you do it? Like it's the '80s. Let's start the simplest — meaning the dumbest — |
| 10:13 | way. We can write a little routine I'll call LIST.PRG. I open the file with USE, clear the screen, and start |
| 10:20 | a loop checking that we're not at EOF — End Of File — like |
| 10:26 | it says here. Then I keep comparing the name field of the current record to "Brian," and it wouldn't find anything, because I need to |
| 10:33 | search by the exact name — so "Brian Russell." And sure, I can just search the first few letters too, but that's one more |
| 10:39 | operation. For now I'll simplify. From the command line, we can call dBase using that |
| 10:45 | program. In this stupid example, it starts checking the first record, which is Fábio — not a match. Not EOF, so |
| 10:51 | move to the next one with the SKIP command. Still not EOF, so to the next one, and there's |
| 10:57 | Brian. Then just grab the company field and print it to the screen with this command, and exit the loop with EXIT. This is the worst case, |
| 11:05 | where what I'm looking for is the last record. Imagine a much bigger file with 1,000 records — you'd have to check |
| 11:12 | one by one, a thousand times, every time. That's why this is the dumbest, most primitive way to search in a database. |
| 11:19 | Now that you understand that, promise me you'll never do it this way on a modern computer. That program scanning through thousands of |
| 11:25 | records would take less than a second on modern hardware. But back in the '80s it could take several seconds, depending on how many |
| 11:31 | records you had. But obviously, even in the '80s we weren't stuck doing it that dumb way. Even in dBase, you could |
| 11:38 | create a second file — an index. Just do INDEX ON NAME and it creates a |
| 11:44 | separate index file with the NDX extension. Then you can open the database with USE CONTACTS INDEX INDNAME. Or since |
| 11:52 | it's already open, you can just SET INDEX TO and switch between indexes |
| 11:58 | depending on which field you want to search. I had typed the company name wrong for Ratliff, so let's do SEEK |
| 12:05 | for Wayne and do a REPLACE on the company field to Ashton-Tate. Done. That's how |
| 12:10 | you search and then modify a record. The SEEK command will use the index instead of doing a loop with comparisons |
| 12:16 | like I did before. By the way, this REPLACE command is used to change data in the fields of the current record. With SEEK, we |
| 12:22 | can find a record, but to create a new one, we'd have to do APPEND BLANK first — to append |
| 12:29 | an empty record at the end of the file. Then REPLACE would write the data into that new record. And that's the basics. This type of |
| 12:36 | index I already explained in the episode on trees, and also in the storage episodes. It's a variant of a B-tree. Remember how I |
| 12:43 | said trees are the most important structures in computing? The DBF database file is kind of like |
| 12:49 | a struct array on disk, but an NDX index file is a B-tree structure. |
| 12:55 | So instead of search time being linear — brute-force loop, one by one — |
| 13:00 | with the index it becomes logarithmic, which is an order of magnitude faster and more efficient. In my brute-force loop, |
| 13:07 | if each comparison and SKIP took, let's say, a millisecond, and I had 10,000 records, and what I'm looking for is in |
| 13:15 | the last record — worst case, that'd take 10,000 milliseconds — 10 whole seconds. |
| 13:22 | But with a B-tree index with logarithmic complexity, it'd take maybe a little over 10 |
| 13:28 | milliseconds. Even if I double that amount of records, the search time wouldn't go up much more |
| 13:34 | than that, given the logarithmic nature. Depending on what I'm doing, the performance gain could be 100 times or |
| 13:41 | more using the right index. And that's why in the database world, everyone talks about always making sure you have the right |
| 13:48 | index set up. But what if I now want to search by phone number or by company name? Well, we can create an |
| 13:54 | index for each field, like INDEX ON PHONE and INDEX ON COMPANY. Note |
| 14:01 | how for the index names I had to truncate them a little — in MS-DOS, file names could have at most 8 letters, |
| 14:07 | a limitation of old FAT16 — the FAT file system you use to format SD cards for cameras |
| 14:13 | is FAT32, or the newer exFAT, not old FAT16. They're compatible but with |
| 14:19 | much higher limits, which is why you can have long filenames now. Getting back to dBase, we can list the |
| 14:25 | files created. As I said before, each record takes approximately 213 bytes. I have three records, so |
| 14:32 | that's at least 639 bytes. In this case, the DBF format stores extra things like a metadata header, which is why |
| 14:39 | 986 bytes makes sense. But look — each index file is about a kilobyte. I think that's |
| 14:45 | the minimum size for an index. I wrote a little program to add more fake records, just to grow the |
| 14:51 | file sizes. Look at the listing here — the annoyance of a language as rudimentary as dBase III is that it doesn't even |
| 14:57 | have a function to generate random numbers, or trivial things like computing the modulo of a number. So I had to |
| 15:03 | build a number generator using only seconds — there isn't even a function to get milliseconds. So I end up with lots of |
| 15:09 | repeated characters, but whatever. Look how I had to calculate modulo by hand — grabbing characters |
| 15:14 | from the ASCII table and concatenating them. Super primitive. Generating 40 new records and re-indexing — let's see the |
| 15:21 | file sizes. The database itself, the contacts table, with 43 records now, is almost 10 KB — a bit more than |
| 15:28 | 240 bytes per record on average. The indexes: the name one is almost 8 KB, and |
| 15:35 | phone, which is a smaller field, is a little over 2 KB. Company is the same size as name, so it's about 8 KB |
| 15:41 | too. Think about that for a second — the index files are taking up almost double the space of the table itself. A lot of people |
| 15:49 | may not realize this, but indexes take up space. And it's not a little. Even more important than that — in a modern database, |
| 15:55 | let's say an insert operation on the table for a new record takes a millisecond. But now let's say we have |
| 16:01 | those three indexes, and updating each one of the indexes takes another millisecond each. Now it's a total of 4 milliseconds |
| 16:08 | to insert a new record and update the indexes. Insert time is four times as long. Indexes are a |
| 16:15 | double-edged sword — on one hand, we can speed up searches by 100 times, maybe more. But on the other hand, operations like |
| 16:23 | insert, update, or delete will take twice as long, four times as long, depending on how many indexes |
| 16:30 | you have. Get that? By the way, indexes in dBase or even in Clipper were super |
| 16:35 | unstable. They'd constantly go stale, and that's why every program we made back then |
| 16:40 | had a Maintenance option in the menu. We'd train the client's operator to run |
| 16:46 | it from time to time — an operation to reindex everything from scratch, to guarantee that search would work. The bigger the |
| 16:52 | table, the slower the reindex would take. Thankfully, modern databases are much more stable about updating |
| 16:58 | indexes and do it without needing manual intervention, most of the time. But that's not all. Until now I've only |
| 17:04 | talked about adding new records to the file. That's easy — just append the record's bytes to the end |
| 17:10 | of the file. Updating isn't too hard either — just do SEEK to find the record by index and |
| 17:16 | do REPLACE to overwrite the new data on top of the desired field. But what about deleting? What happens? Think about |
| 17:23 | an array in memory — it's a contiguous sequence. If you want to delete an element in the middle, there's no other way — you have to create |
| 17:29 | a new array and copy all the elements over, so there's no gap in the middle. That's why in memory we use |
| 17:36 | other structures like linked lists — then you just change the pointer of the previous element to point to the next one. But |
| 17:43 | linked lists are super inefficient compared to arrays — they're harder to navigate because there are no |
| 17:49 | contiguous addresses, so there's no way to just calculate an offset and jump directly to an element. You have to navigate pointer by pointer. |
| 17:56 | Very slow. A DBF file works similarly to an array — there's no way to delete a |
| 18:01 | record in the middle. What happens is that each record has a separate bit just to say whether it's valid or not. When you |
| 18:08 | delete it, it just flips that bit from zero to one. Then when you try SEEK or navigate forward with SKIP, it will |
| 18:15 | skip that record if that bit is flagged as deleted. This makes the operation simple, but the downside is the space on disk |
| 18:22 | keeps being occupied — the file doesn't shrink. That's why in addition to reindexing — regenerating the |
| 18:28 | index files — the maintenance menu also had another command: PACK. What PACK does is the same thing as with an array — it |
| 18:36 | generates a new DBF file from scratch and copies all the non-deleted records into it, and at |
| 18:43 | the end deletes the old file. That's the only way to reclaim disk space. But to do that, you need to have almost |
| 18:49 | the original file size worth of free space available. And this exists even today in modern databases. |
| 18:56 | Anyone who's worked with SQLite 3 or PostgreSQL has probably run into the VACUUM command — |
| 19:01 | it even has an auto-vacuum option so it does this on its own without you having to send the command manually. But |
| 19:08 | in essence, it's the same idea as dBase's PACK command — reclaim disk space and de- fragment data on disk to be |
| 19:14 | more efficient, occupying less space. Speaking of SQLite 3, it would be the spiritual successor of dBase and Clipper. |
| 19:21 | It's probably the most widely used relational database in the world. It's everywhere. If you have |
| 19:27 | Android devices, the apps running inside them certainly use SQLite 3. Your home router, your |
| 19:34 | Smart TV, Alexa, your smartwatch — everything has SQLite 3. Any application |
| 19:39 | that needs to store any kind of data normally uses SQLite 3. The reason |
| 19:45 | for that is it's extremely small, highly efficient, flexible, and portable. |
| 19:50 | Its source code is in C — super clean — and can be easily ported to |
| 19:56 | run on any operating system, whether Linux, Mac, and any architecture, whether x86 on your PC or ARM |
| 20:03 | on your Smart TV or game console. It all fits in a single C file with very few pages, and offers a |
| 20:10 | language compatible with SQL. It's very well made — one of the best and most useful open-source projects of all |
| 20:16 | time. And if you're a C student, it's worth exploring the source code — it's not that hard to understand. That leads me |
| 20:21 | to the episode where I showed what would be an intro to making a SQL-like language, where I used |
| 20:28 | exactly a chunk of SQLite 3's SQL grammar, but underneath I made it access an in-memory JavaScript structure. |
| 20:35 | It could have been a DBF file like from dBase and Clipper, which I just showed. The difference is that instead of commands |
| 20:42 | like APPEND, REPLACE, USE, SKIP that I showed so far, we could offer a version with SELECT, INSERT, UPDATE. The DBF format |
| 20:50 | is still used in many places today — Python's pandas can load and manipulate DBF files. The R language |
| 20:57 | for numerical computation can also understand DBF. Languages like JavaScript, Java, C# — they all have libraries that |
| 21:04 | can load DBF. It's a cool format that's still used because it's super simple and because there are legacy systems in |
| 21:11 | old industries. And obviously nobody should start a new system depending on that format — for that |
| 21:17 | there are more modern things, like SQLite 3 itself. If SQLite 3, like dBase or Clipper, doesn't depend on |
| 21:24 | having a network server to serve data or complicated clients — it opens the file and you manipulate it |
| 21:30 | directly. That's why it's so small and efficient. There are options to expose SQLite 3 over the network, but its focus |
| 21:36 | has always been to run locally. I think it needs less than 1 MB of RAM to run — maybe around half a meg. That |
| 21:42 | is ridiculously small. Many Clipper programs from the '90s needed more than that. dBase, Clipper, |
| 21:49 | FoxPro — these are what we call the xBase family of languages, which support the DBF |
| 21:54 | format. There's a more modern, open-source version of Clipper called Harbour — that's xHarbour. I don't know if |
| 22:01 | anyone uses it, but it could serve to port old xBase programs to run on more modern platforms, in addition to |
| 22:08 | adding modern features like object orientation and the ability to connect to modern SQL databases. And |
| 22:14 | again, I don't recommend starting any new project with them. Any Python connecting to SQLite 3 or PostgreSQL |
| 22:21 | will be a better choice. The technologies of the '80s were limited by the few resources we had. The |
| 22:27 | processors were super slow compared to today — we're talking thousands of |
| 22:33 | times slower. Programs had to be super efficient, because any out-of-place operation stole scarce resources — CPU or |
| 22:41 | RAM. They had to fit within 640 KB of RAM at 15 MHz or less. |
| 22:47 | Any garbage processor of today has two or more cores, each with at least 1 GHz. Look at the difference. |
| 22:54 | I mentioned that the FAT16 file system of MS-DOS at the time only supported filenames of eight letters plus three of |
| 23:01 | extension. There wasn't enough memory to support larger data structures than that. And more importantly, there wasn't enough processing headroom to |
| 23:07 | guarantee data integrity — things like checksums. For the '80s that would have been |
| 23:14 | too expensive. That's why floppy disks on FAT16 would commonly fail — files would get |
| 23:19 | corrupted and data would be lost. Same deal with the DBF format — it was common for those files to get corrupted. Backups were |
| 23:26 | essential, and backup back then meant making a copy to a floppy disk at the end of the day. Every little corner shop that |
| 23:32 | had an amazing program to track inventory, suppliers, accounts payable and receivable, and that sort of thing, knew they |
| 23:38 | needed to do this. I wrote a few programs like that in the early years of SQLite 3. The file format |
| 23:45 | reflects that difference. To start with, it's not an append-only file like DBF, where you just |
| 23:50 | keep writing the next record in front of the previous one and navigate via address offset. It adopts a B-tree structure — |
| 23:55 | not just in the index, but in the database itself. And actually, in |
| 24:01 | SQLite 3, there's a single file that contains multiple tables, instead of each table having a separate file. |
| 24:08 | Internally, it doesn't allocate records, it allocates pages. Pages are like ranges |
| 24:13 | or address intervals — for example, page one might be address 1 through 500, page two from address 501 through 1001. |
| 24:20 | Pages contain records or rows of a table. The pages are organized |
| 24:25 | in a B-tree, and the records are in the leaves — inside the pages. In |
| 24:32 | the episodes on trees, file systems, and SQL, I talked about variants like |
| 24:37 | B+ trees, which modern file systems like ext4 and Btrfs |
| 24:43 | use. Everything in your OS is some variant of trees, in particular B-trees. That's why I said |
| 24:49 | it was important to know how they work. And in SQLite 3's case, both the database itself and its |
| 24:55 | indexes are B-tree variants. They are very efficient. Let me recap. First of all, the "B" is not for binary — |
| 25:02 | a binary tree is a type of tree, but it's not a B-tree. The B doesn't have a single definitive definition, but think of it as "balanced." One |
| 25:10 | key characteristic: it's always balanced — all leaf nodes have the same depth. That means no matter which |
| 25:16 | key you're searching for, it takes roughly the same time to access any node. That matters |
| 25:22 | because seek time on a mechanical hard drive costs time. A well-structured B-tree |
| 25:28 | minimizes the number of disk seek operations. B-trees have high fanout — |
| 25:33 | meaning each internal node has a large number of child nodes, which is |
| 25:38 | the order of the tree. This helps with disk storage because a large chunk of data can be written all at once in |
| 25:45 | a single page. The old DBF way, writing one record at a time to the end, is quite inefficient and generates a lot of |
| 25:51 | fragmentation. High fanout means many keys can be accessed |
| 25:56 | at once in a single disk seek operation. It's better to read a key you didn't need along with it than to keep searching |
| 26:02 | randomly all over the disk. Insert and delete operations are |
| 26:07 | very efficient — the algorithm that keeps the tree balanced (and I show a version of that in the tree video) is super |
| 26:13 | efficient. When a new key is inserted or deleted, the tree is rebalanced to guarantee the property |
| 26:20 | that all leaf nodes always have the same depth. And it's very stable even as the tree grows a lot. A |
| 26:26 | SQLite 3 database, which is super tiny, can handle a file that can theoretically reach up to 280 terabytes. |
| 26:34 | Operations that grab multiple records at once — like a SELECT * — |
| 26:39 | become more efficient because of the property that multiple records are together in the same page. With few |
| 26:45 | disk operations, you can grab all of them sorted in one shot. So things like listings and file builds |
| 26:52 | tend to be much more efficient than old DBF. Anything you ask for that's ordered and sequential tends to be |
| 26:59 | efficient because of the page properties I explained. I always heard that nobody should try to build a database |
| 27:05 | from scratch without having seen how a real one works under the hood. And that's one of the reasons. Disk operations — |
| 27:10 | especially mechanical — are expensive. Today they're still pricey, but in the '80s and '90s it was |
| 27:16 | insane. A modern hard drive like my Iron Wolf 12-terabyte comes with |
| 27:22 | 256 MB of onboard RAM cache — there were no PCs in the '90s with that much RAM. Without cache, |
| 27:28 | operations are more costly because you really have to physically move the head over the disk. Here I'm |
| 27:34 | speculating because I don't really remember if it was exactly like this, but for example, I'd reserve space at the start |
| 27:39 | of the disk for things like the OS, and the data itself would start being |
| 27:45 | written after that — as if I had a partition C but near the center of the physical disk, where operations are |
| 27:51 | faster than near the edges. Then a partition D would hold |
| 27:56 | the data. Actually, I think that's why back in the day we'd partition the drive — C: for the OS, to ensure that on boot the |
| 28:02 | disk works less and is faster. Then data and programs go on D: further from the center of the disk. |
| 28:09 | Even the reason we still put the boot drive on an SSD or NVMe — it's much faster — while your media library |
| 28:16 | goes on a separate mechanical drive. It's always a trade-off between more performance or more storage. |
| 28:22 | And not just SQLite 3 — clearly, any modern database, SQL or non-relational, like MongoDB, Firebase, |
| 28:32 | DynamoDB, Cassandra — and not just databases, but file systems like Btrfs that I |
| 28:37 | already mentioned — they all use some variant of B-trees, for exactly |
| 28:43 | all those properties. Everything that deals with data management uses |
| 28:48 | B-trees. Hey, here's another long one — MongoDB doesn't store everything as JSON. I send JSON and |
| 28:53 | it returns JSON, so JSON must be the most efficient format. No way. |
| 28:59 | If you're a total beginner, I'll let that slide. But if some programmer thinks that, they really don't understand anything about |
| 29:06 | programming. JSON is a consumption format, not a storage format. It's a translation format to make |
| 29:12 | things convenient, but it's highly inefficient. I explain this in the episode where I talk about |
| 29:18 | Twitter's code. First, MongoDB doesn't store JSON internally — internally, documents are stored in BSON, or Binary JSON, which it |
| 29:23 | calls Binary. BSON is a binary format like Google's Protobuf. Second, it's internally organized in a |
| 29:30 | B+ tree structure, where the values themselves are stored directly in the leaf nodes at |
| 29:35 | the bottom of the tree, unlike a pure B-tree which only has pointers. The |
| 29:41 | first episode where I made a SQL engine on top of a JavaScript array was to demonstrate that having SQL |
| 29:48 | describes nothing about how the database works underneath. Same thing with MongoDB — the language and |
| 29:55 | the data format like JSON you use on top says nothing about what the architecture is like underneath. So much so that |
| 30:02 | PostgreSQL via SQL can return data in JSON format if you want — it's just a translation. JSON means nothing |
| 30:09 | to any database. They just need to choose to export or import data in that format. It's just a format like |
| 30:18 | XML or CSV or Excel. Every consumption data format like that requires an import step to the real internal binary format, or an export step |
| 30:25 | out to that format. So if you do a SELECT * on a database, first it pulls all the records in |
| 30:32 | its own binary format. That takes up X amount of memory. Then you ask for it in JSON format, so it needs |
| 30:38 | yet more memory — more than X — to perform that translation. It's a serialization and |
| 30:45 | deserialization process, and it will always require double the memory to get that convenience. That's why communication from |
| 30:52 | one service to another should always use binary protocols compatible between them — for example, |
| 30:59 | Protobufs — avoiding as much as possible translating data, especially into text format. The data format of SQLite |
| 31:06 | 3 has no relation whatsoever to its ability to accept commands in SQL. There is no "SQL database" — |
| 31:13 | there are databases that understand the SQL language. That's it. Internally they all |
| 31:18 | are implemented in different ways for different scenarios and use cases. SQLite 3 is great for use |
| 31:24 | in a Smart TV, while PostgreSQL or MongoDB not so much — those were built to run on servers. There are even projects |
| 31:31 | to run SQLite 3 on servers, but again, that's not what it was built for. Use the right tool in |
| 31:37 | the right place. Just because you can back a screw out of the wall with pliers doesn't mean you should — find the damn |
| 31:44 | right screwdriver. Internally, every database will have a storage file format |
| 31:49 | like DBF, or more correctly, like SQLite 3's format, and an index file format. Both will be some variant of a |
| 31:55 | B-tree or B+ tree. Beyond that, we have modern things. In SQLite 3's case, there will be another file with a name ending |
| 32:02 | in WAL — Write-Ahead Log. This is another thing that file systems like FAT didn't have, but every modern system |
| 32:09 | like NTFS or ext4 has — a journal. To save resources, that REPLACE |
| 32:15 | command I showed back at the start with dBase writes directly over the old record in the DBF file. That's |
| 32:21 | terrible, because let's say we're doing a mass update on all the records in the file, adding |
| 32:27 | a 9 prefix to every phone number in São Paulo back in 2012. Now let's say that in the middle of that update, |
| 32:33 | the power goes out and the computer reboots. F***ed. That was common |
| 32:39 | back then — it meant that very likely the file ended up in a corrupted state, and I lost some data. Today |
| 32:46 | nobody does that anymore. There are various strategies, but SQLite 3 chose a write-ahead log — |
| 32:52 | it first writes the changes to that separate log file, and after it finishes, swaps one for |
| 32:59 | the other. Simplified, it's like having a file called CONTACTS, then I have a copy called CONTACTS-WAL, and |
| 33:05 | the updates I make to that second file. If everything went well through the end, then I swap one file for the other. |
| 33:11 | It's a bit more advanced than that, but just to give you the idea — if the power goes out |
| 33:17 | and the second file gets corrupted, I still have the original intact. On top of that, if you need to do searches, I can |
| 33:22 | search in the original while the transaction isn't finished in the second file, instead of being locked and having to |
| 33:28 | wait until all operations are done. Every database has some kind of mechanism like this — more sophisticated — |
| 33:34 | to have the smallest lock window possible and ensure no data gets corrupted. It's a kind of copy-on-write mechanism, like the |
| 33:40 | Btrfs file system on Linux also has. That's why it's |
| 33:46 | quite uncommon today to lose data. Even Windows has NTFS, which protects |
| 33:51 | reasonably well. Any basic Linux install uses at least ext4, which has journaling support. To lose data |
| 33:59 | today, you pretty much have to be running on very crappy hardware, like an SD card. An SD card is storage hardware |
| 34:06 | that was made for high capacity and to be super cheap. It was made to take photos, record video, |
| 34:12 | and immediately transfer to a computer. It was not made to leave there stored forever. It's not reliable, and |
| 34:18 | you can lose data out of nowhere — especially on the cheaper models. Cheap SSDs from AliExpress are the same deal — |
| 34:24 | in that case because they're outright fraudulent, manufactured to fail. Watch out for that. Another feature that relational databases |
| 34:30 | brought was the concept of transactions and the concept of atomicity in operations — either everything succeeds or |
| 34:37 | nothing does. And consistency — for example, foreign key rules and everything. Data must |
| 34:43 | always follow those rules, no exceptions. Isolation — meaning if there's a set of transactions running |
| 34:49 | in parallel, the result has to be the same as if they had run sequentially. The database can't end up in an |
| 34:54 | inconsistent state. And durability — if the transaction says it wrote the data, we can |
| 35:00 | trust it's physically on disk. If an error happens — the famous power outage — the database needs to |
| 35:06 | roll back to the last known consistent state. It can never keep operating in an inconsistent state. Each database |
| 35:12 | implements this in different ways, but in general, it means we can trust the data in a relational database — |
| 35:18 | whether MySQL or PostgreSQL. In general, they implement these |
| 35:24 | characteristics well. Even small SQLite 3 does this. One of the dumbest ways is to simply lock the entire file |
| 35:30 | for each operation, wait for it to complete successfully, and only then release it for other operations. But of course that |
| 35:36 | would be highly inefficient. But that's exactly how xBase databases like |
| 35:41 | dBase worked on networks in the '90s, when we started using network cards in MS-DOS and building small LANs using |
| 35:48 | tools from old Novell or Windows 3.1 for Workgroups, or the venerable OS/2 from |
| 35:53 | IBM. In practice, one computer would be elected as a file server, and those DBF and NDX files were shared over |
| 36:01 | the network, and all the other computers on the network saw the same files. Each computer had the same version of the |
| 36:08 | dBase or Clipper or FoxPro program installed. If someone had an older version, chaos. Consistency and the |
| 36:15 | rules depended entirely on the version of the program installed on each machine. Atomicity was kind of guaranteed |
| 36:22 | by the locking system — when a program wanted to insert a new record, it locked access to that file. If a |
| 36:29 | second computer tried to read, it received an error that the file was busy and had to wait. And that didn't always |
| 36:35 | work well. A DBF file on its own on a single machine could corrupt because there was no journaling system. |
| 36:41 | Imagine on a network — file corruption was routine. Forget to do your backup |
| 36:46 | at the end of the day, and guaranteed, the next day something would break and corrupt. Network file systems like Novell were a |
| 36:52 | complete hack job built on top of DOS with super immature technology. Today we use |
| 36:59 | internet protocols like TCP/IP, but back then they used more |
| 37:04 | primitive protocols like IPX/SPX and Microsoft's NetBIOS — real garbage. And even the |
| 37:11 | network technology itself — today we use gigabit internet and up, but back then it was coaxial cable, |
| 37:17 | like TV cable, which at best did 10 megabits, dropped packets, corrupted |
| 37:22 | data, and so on. With the migration from MS-DOS to Windows and the shift in architecture from 16-bit to 32-bit, we gained up to 4 GB |
| 37:30 | of RAM to work with, without needing the memory hacks in DOS like I explain in the 640KB episode. And with that, |
| 37:37 | instead of every program on every machine on the network trying to access the data files directly, they started talking to a server |
| 37:44 | software. This way, only one software had direct access to the files, and all the other client programs |
| 37:50 | talked to that server using some protocol — in this case, SQL. This was the era of programs written in Visual Basic |
| 37:58 | or Delphi talking to more modern server databases, like SQL Server — which had T-SQL — or Oracle — which had |
| 38:04 | PL/SQL — or some more niche ones like InterBase from Borland, which was the go-to |
| 38:10 | for Delphi users. Instead of each client program having to control the file integrity, better to |
| 38:16 | outsource that to a server. The clients just say, "hey, store this for me" or "hey, search this for me," and the |
| 38:22 | server handles it. And that scaled a lot — not just the server handles it — and scaled massively, not just scalability, but also |
| 38:28 | stability. If a client sends an unsupported operation, the server can just reject it instead of trying to execute it and |
| 38:35 | corrupt files. SQLite 3 officially doesn't have a server mode, though there are people trying to make one — no idea why — |
| 38:41 | a project called Valentina DB does that. I see no advantage. If you want a SQL database in client-server |
| 38:47 | format, use a real one that's mature — like SQL Server or PostgreSQL. Use SQLite |
| 38:53 | 3 for programs that need data locally, like your Internet router or watch — the examples I already gave. When we have the |
| 38:59 | client-server format, we get some advantages and some disadvantages. The first is that speed depends on network quality. |
| 39:05 | Everything that runs locally is always faster. Over a network, you need to take the result, break it into packets, route |
| 39:12 | those packets, receive and process them in a buffer, and only then do you have the data. We can |
| 39:17 | choose to start processing data as it arrives, or we can choose to wait to receive the full response before |
| 39:24 | doing anything. That's the difference between getting everything at once or using streaming techniques. And the right approach |
| 39:31 | depends on your query. If it's a dumb, poorly made query that does SELECT * on a |
| 39:37 | 10 GB table without using streaming — good luck. You'll eat all your machine's memory and then some swap space on disk. This is what |
| 39:44 | beginners have the most trouble understanding — the data you request needs to go somewhere. Nothing is free in |
| 39:51 | computing. The main job of a programmer is precisely to manage resources in the most |
| 39:57 | efficient way possible. For example, let's say I need to build a PDF report of all sales for the month. I'm going to do |
| 40:03 | something like SELECT * FROM orders WHERE date > now minus 30 days. That's a |
| 40:09 | basic query that filters all orders created in the last 30 days. Pretend it'll return about 500 |
| 40:15 | orders. Let's say each one of those rows consumes 500 bytes. |
| 40:21 | If I pull everything at once from the database and put it in an in-memory array, that's 250 MB. That's quite a bit. Then I |
| 40:28 | open some library to build the PDF and convert those rows into a PDF document in memory. |
| 40:34 | To simplify the example, let's say each row in the PDF also uses 500 bytes. That means by the end of the operation, I'll be |
| 40:40 | consuming 500 MB of memory — half with the data from the database |
| 40:45 | and half with the PDF. And what's the right way? It depends. Maybe that is the right way. There are |
| 40:51 | techniques if you want to optimize. One way is to choose a PDF library that supports writing directly to disk |
| 40:58 | instead of accumulating everything in memory. For example, in Java there's the Apache PDFBox library — you can save |
| 41:04 | incrementally, one page at a time, to disk. Let's say each page has 20 orders. Then I'll only need |
| 41:10 | approximately 10 megabytes in memory at a time. On top of that, we can receive one row at a time from the database, write |
| 41:17 | one row in the PDF, and discard that memory. Then receive the next row and do the same thing, without accumulating everything. |
| 41:24 | In summary, that means memory-wise I'd need at most about 10 megabytes to build one PDF page, |
| 41:30 | plus half a megabyte per row I receive from the database server. A total of 10.5 MB. Then it doesn't matter — the |
| 41:37 | report has 500 orders or 1,000 orders — I'll always use at most 10.5 MB at a time, not 500 MB |
| 41:43 | for 500 orders, or 1 GB if it's around the holidays and there are a thousand orders. That's your |
| 41:49 | job as a programmer — find the actual maximum ceiling you need and limit resource usage. Only then is it |
| 41:55 | possible to scale. The amateur way is to keep using more and more memory as the data volume grows. |
| 42:01 | Always think of ways to use a fixed ceiling of memory and processing regardless of how much data you'll |
| 42:07 | process. When we say it's important to understand SQL properly, the first reason is to learn how to write queries or |
| 42:13 | searches — SELECTs — that return the smallest possible amount of data, because every extra piece of data that comes in and isn't used |
| 42:20 | wastes memory and processing. But we also need to understand some concepts — like if we're going to |
| 42:26 | write or update data, it's better to send all the commands at once than to send them one at a time, wait for each one |
| 42:32 | to finish and confirm before sending the next. That example I mentioned of adding a 9 in front |
| 42:38 | of every São Paulo phone number in 2012 — let's say there are 100,000 users in my table. The absolute dumbest way: write a program that |
| 42:44 | connects to the database and first does a SELECT * and returns everyone to your program. Again, if each |
| 42:50 | record is half a kilobyte and you did SELECT * and pulled all the columns of the table — that's 50,000 megabytes, 50 |
| 42:56 | gigabytes of data. You seeing why pulling everything into memory is bad? It's the easiest way to think first, |
| 43:02 | but it's the worst way. Let's say you're on a beefy server on Amazon, a PC like mine with 64 GB RAM, and after a good |
| 43:10 | amount of time the whole table is loaded into memory. Now you loop through that |
| 43:15 | table and send an UPDATE to the server for each record. One UPDATE is one transaction — 100,000 times. 100,000 |
| 43:22 | updates, each with individual index changes. 100,000 commits. 100,000 round-trips |
| 43:27 | waiting for an "OK" from the server. There go several more hours waiting. So what's the right way? |
| 43:33 | Isn't it obvious? You don't need to SELECT anything. Just issue a single batch UPDATE, something like UPDATE users SET |
| 43:41 | phone = '9' + phone WHERE city = 'São Paulo'. A single |
| 43:46 | command that touches all the thousands of records all at once, in a single network connection. A single |
| 43:53 | commit, a single round-trip. No need to pull everyone into memory and then do updates one by one. Understand that |
| 43:59 | concept — the best operation brings zero data from the server and does everything |
| 44:04 | right there. The dumb way: client program — let's say just a web or mobile app — individually sends |
| 44:09 | an UPDATE command for each user, waits for the response, and sends the next one. 100,000 times. The right |
| 44:15 | way: your program connects just once and sends just one command and affects those same 100,000 records. And the time |
| 44:22 | difference here will be on the order of hundreds or thousands of times faster, using orders of magnitude fewer |
| 44:28 | resources in memory and processing. This is what understanding SQL means. Beginner programmers learning today have no excuse. |
| 44:36 | The old-school folks who did dBase — I can even understand that, because in that primitive DBF format there was no other way. |
| 44:42 | You had to start a DO WHILE loop, use an IF condition, then do REPLACE |
| 44:47 | on the current record, SKIP to jump to the next one — 100,000 times. There was no server doing it for |
| 44:54 | you. But at least back then everything was running locally on the same machine, modifying the file directly — |
| 45:00 | which is what the SQL server will have to do on its end anyway. But a database client doesn't have to |
| 45:06 | loop at all, communicating with a server record by record. Almost never. If you have a loop that processes data |
| 45:12 | coming from the database server, something is probably wrong. At minimum, it's a red flag that needs review. |
| 45:19 | At least remember this as a rule: if there's a loop, you might be doing it wrong — think again. Another thing the old format |
| 45:26 | didn't let you do — that you need to learn how to do, and it's not SQL — it's constraints. Those consistency rules — for example, |
| 45:33 | a field that can never be empty, or a field that's a foreign key — a field in one table referencing |
| 45:39 | the primary key of a record in another table. Foreign keys guarantee that you're writing IDs that |
| 45:46 | actually exist. In DBF format, none of that existed — you as the programmer had to enforce those rules |
| 45:52 | manually in code, with a bunch of IFs everywhere. In SQL, if you have a bunch of IFs, they probably should |
| 45:58 | be constraints. In the modern world of client-server, it means that many times those rules will be duplicated on the |
| 46:04 | client, to show the user they entered invalid data — like duplicate fields, |
| 46:11 | for instance — and on the server, to guarantee that only truly correct data is in the tables. A lot of people think this |
| 46:17 | redundancy is bad, but I think the opposite. Nothing is worse than inconsistent data. Better to check twice |
| 46:23 | than not to check. Checks and consistency rules that only exist on the database side |
| 46:29 | but the client accepts everything and doesn't check anything — that's the worst piece of garbage imaginable. Those databases are always in an |
| 46:35 | inconsistent state and it will always cause problems. Create the table schema with |
| 46:40 | all constraints and validations — data type validation, size validation, nullable validation, |
| 46:47 | key validation — everything. Then make a class on the client side that mirrors the tables using an ORM like Hibernate in |
| 46:55 | Java, or Mongoose in JavaScript, or other ORMs. Repeat the same |
| 47:00 | validations. Then make a React component on the front end, and repeat the same validations. |
| 47:08 | Yes, repeat it three times, and write unit tests for each one, and integration |
| 47:14 | tests that hit all three at the same time. That's your job. It's like a doctor thinking washing hands every time |
| 47:19 | before surgery is a waste of time. Wash again. Okay, you need to study |
| 47:27 | SQL — not just the SQL syntax, but resource usage and server-side processing, |
| 47:33 | and how to optimize. No ORM, library, or framework will do that |
| 47:38 | for you. In fact, it's very easy to just trust that the framework will take care of everything on its own. A lot of tutorials, |
| 47:44 | in their attempt to be educational, will teach you the least efficient way, because the most efficient way is usually harder |
| 47:51 | to explain and demonstrate. And when you test with a handful of records — 10, 100, even 1,000 — it makes zero difference. |
| 47:59 | Only when you actually put it in production will you understand the impact. That's the difference between children and adults. Those who've |
| 48:06 | already experienced losing client data or everything grinding to a halt because the shop stopped working — only then do they get it. "Oh, |
| 48:13 | I had it wrong." Exactly — try to avoid having to reach that point. Not |
| 48:18 | everyone needs to stick their finger in the socket to know it'll shock them. In a large real-world system on a team |
| 48:24 | with multiple developers, it's hard to verify that all the code is well-written. |
| 48:30 | And even experienced people under pressure will let a piece of code slip through that'll use memory it doesn't need, or that'll |
| 48:36 | slow everything down because it put a loop somewhere it shouldn't be. That's why every system going to production needs to |
| 48:42 | be monitored. There are several monitoring tools — old ones like Nagios or Zabbix, or |
| 48:49 | more modern services like Sentry, Datadog, New Relic, |
| 48:55 | AppDynamics, and many others. There's no excuse for not using at least one. Honestly, I can't say which is |
| 49:02 | best today, but when in doubt, I always used, and still recommend, at minimum installing New Relic or AppDynamics. Some |
| 49:09 | of them are passive, like the old Nagios or Logstash, because they measure things outside the application — like CPU usage, memory, |
| 49:17 | and parse log files. But the best ones require installing a library that acts as an agent |
| 49:22 | inside the application. Since it has access to application memory, it can do much better analysis. Without going into |
| 49:28 | detail, we can evaluate right after a production deployment and see if memory usage went up and stays constant, |
| 49:35 | for example, or whether it keeps slowly climbing until it crashes. Or we can monitor when a marketing campaign |
| 49:42 | goes live and a larger volume of traffic comes in — is the increase in resource usage proportional? More importantly, |
| 49:48 | we can evaluate which parts of the code typically consume the most resources. With that, |
| 49:54 | we can focus on improvements that are much more precise — only the parts that really need it — instead of guessing and |
| 50:02 | touching all the code without knowing what actual impacts it's causing. Once an application goes to production, all |
| 50:09 | maintenance should be done around metrics — always measure before and after. If your goal is to reduce |
| 50:15 | infrastructure costs, always attack the biggest offenders according to the metrics. If you can't measure it, you certainly |
| 50:21 | can't fix it. On the database side, nothing can grow infinitely. As I said, for |
| 50:28 | small or medium companies, it usually takes a long time to start entering Big Data territory — dozens or |
| 50:34 | hundreds of terabytes of data. A traditional relational database tends to hit the following problems |
| 50:40 | with scale. First, tables simply get too large. And when I say large, I mean |
| 50:46 | hundreds of gigabytes or terabytes. No matter how many indexes you have — remember |
| 50:51 | I showed how in DBF the index files also grow — the more data you insert, the larger the indexes get too. |
| 50:58 | There will come a time when searching the indexes themselves is heavy. It'll start to slow. The first |
| 51:04 | strategy to deal with this problem is called archiving. The right approach is to have |
| 51:09 | a second database server used only for search and reports, but outside user access. Let's say |
| 51:15 | you have an e-commerce. If you're successful and sell a lot, your orders table will have millions of sales. But think — what's the point of keeping |
| 51:22 | old order data? Orders from users who canceled accounts or haven't logged in in a long time? Move it to a second database |
| 51:28 | so you have one database with data your users actually need, without the data that |
| 51:35 | nobody ever accesses. Let's say your company is a multinational with dozens of branches, dozens of employees, and |
| 51:41 | your system controls everything — HR, payroll, benefits, vacation, documentation, and everything else. Why keep employee data |
| 51:48 | from five years ago? Archive it — move it to a second database, or move it to cold storage, like |
| 51:55 | tape, or to an S3-equivalent service like AWS Glacier, which is a cheaper S3. |
| 52:00 | Any medium or large company with internal control systems will have tables with old data that doesn't need to be there. |
| 52:06 | It's a practice — maybe once a year, maybe every semester — to do this cleanup maintenance: archive, |
| 52:13 | move dead data somewhere else that gets accessed less. It's not deleting — it's moving. Never a good idea to delete anything. You never |
| 52:20 | know when you'll need it, especially your legal team. Keep data at minimum in backups for at least |
| 52:26 | five years because of the law. The vast majority of small companies fail at this — you want a backup that works. |
| 52:32 | The more you worry about archiving — again, not for small companies. Small ones need to worry about |
| 52:39 | the basics: have a backup to start. But then we start entering the territory of unicorns — Uber, Netflix, |
| 52:46 | iFood, MercadoLivre, and various startups that generate tons of data. Let's say it's an iFood — it's not just |
| 52:53 | going to have basic info like user registrations and simple order tables, but data like who was the |
| 52:58 | courier for each delivery, what routes they took, what contacts were made during the trip, whether the user opened the |
| 53:04 | chat, what they said — it's a granularity and volume of data much larger than a typical order. Each small order already became |
| 53:10 | megabytes of data, later to be used for intelligence, metrics on how to improve the experience, and so on. |
| 53:17 | Companies like that generate gigabytes of data per day. The problem isn't just the volume of |
| 53:22 | data, but the speed at which it's generated. This is the territory of data warehouses, data lakes, and that sort of thing. None |
| 53:29 | of these companies has a single database server. They always have multiple databases — |
| 53:36 | and certainly of several different types for each different use case. To simplify quite a |
| 53:43 | bit: on the user's side — they're using the app, placing orders, tracking delivery, and so on — each one of |
| 53:49 | those users is generating dozens of requests to the servers of an iFood or Uber. The searches being done need to be fast. We're |
| 53:55 | talking about hundreds of thousands of users accessing the platform at the same time. No matter how powerful a single |
| 54:01 | server is, none can handle it. You need to distribute the load across multiple servers. When you have multiple |
| 54:08 | application servers, they can't all access a single database server — that would create a huge queue |
| 54:15 | and a lot of wait time, a lot of latency between requests. The problem with relational databases like PostgreSQL or SQL Server is that |
| 54:22 | they were originally designed to run on a single powerful server. You scaled the service by upgrading |
| 54:28 | the machine's hardware — adding more RAM or a better CPU. They were not designed to run across multiple |
| 54:35 | servers. Today we do a halfway approach — the highest volume of operations is usually reads, like browsing |
| 54:42 | a restaurant menu. While doing that, nothing is being written — just reading. All modern database SaaS services |
| 54:49 | can create replica servers — automatic copies of the primary. So the |
| 54:54 | web application servers can do the read in any one of the replicas, avoiding creating a bottleneck |
| 55:01 | on just one. On top of that, today an application server will first query the cache server — like |
| 55:08 | Memcached or Redis. On AWS, we have Amazon ElastiCache, which is basically Memcached |
| 55:14 | or Redis as a service. The application first checks: do you have the restaurant's menu in cache? If not, then |
| 55:20 | query the database, write to cache, and serve back to the user. A lot of |
| 55:26 | the read load falls on some caching solution. It's impossible to build large services like iFood or |
| 55:32 | Mercado Livre without having a large volume of caching. We have two problems with this. |
| 55:38 | The first is that, while it's reasonably simple to create replica servers, it's hard to have |
| 55:43 | multiple servers that handle writes — operations like INSERT, UPDATE, or DELETE happen on the single |
| 55:51 | primary server. All the other replicas are usually read-only. There's a small delay, a small |
| 55:58 | latency, between a write completing on the primary server and the replicas being updated. But that usually is worth it. |
| 56:04 | Every e-commerce in existence has this architecture: a primary database server for writes, several |
| 56:11 | read-only replicas, and lots of caching — combined with an async job strategy |
| 56:16 | like a message queue. Strategies I already explained in the episodes about Ingresso.com, Twitch, and |
| 56:23 | Twitter, so check those out. But even then, there are still edge cases. Let's say |
| 56:29 | we have an analytics service like Google Analytics, capturing every pageview, every click, every action |
| 56:35 | that users are performing across various apps and various sites, to generate real-time monitoring |
| 56:41 | and periodic reports with information about each user. Or imagine we make |
| 56:46 | software that captures data coming from an Apple Watch or Galaxy Watch — heart rate information that |
| 56:53 | each user sends once every two minutes. Well, Samsung has millions of users — can you imagine that |
| 56:59 | data volume? Or imagine a cryptocurrency exchange like Binance, with thousands of transactions happening |
| 57:06 | every minute — thousands of people buying and selling nonstop. Or imagine a game server like Call of |
| 57:12 | Duty or Fortnite, where you capture information about every action of every player — every movement, every shot, every score, |
| 57:19 | players from around the world. We're talking gigabytes being generated per |
| 57:24 | minute. That's a lot of data. And on top of that data, we want to generate summaries like |
| 57:29 | your health report for the last hour, or the last 24 hours, or the month. For that, you have to sort, group, process, and |
| 57:36 | summarize gigabytes of data received per user. Very heavy. And not by |
| 57:42 | coincidence, this discussion started coming up at the end of the 2000s, exactly when social networks like Facebook and Twitter |
| 57:48 | were reaching scale that no other platform had ever reached before, not to mention the rise of |
| 57:55 | mobile and the popularization of online games. In those circumstances, relational |
| 58:00 | database schemas truly hit their limits. Queries become slow from absurd data volume. Worse, |
| 58:08 | writes become absurdly slow, partly because of the guarantees we were |
| 58:13 | used to having — like durability, the idea that if we tell a server to write a row and it says |
| 58:19 | OK, that row is guaranteed to be on disk. In this Big Data scenario, that guarantee |
| 58:26 | becomes a problem. When we talk about Big Data, we need to deal with different assumptions. In a bank, losing |
| 58:33 | a row in your statement is a huge problem — literally the account won't balance, a deposit will be missing, a |
| 58:39 | payment will be missing, money will vanish. Worse, if a row is duplicated, same thing. In an e-commerce, same deal. In a system like |
| 58:46 | the IRS, everyone needs guarantees on the consistency and integrity of data. That's why there is and always will |
| 58:53 | be a place for databases with the characteristics that Oracle or SQL Server or |
| 59:00 | PostgreSQL offer today. But for certain types of data — like analytics, like heart rate data, like online game data — |
| 59:06 | even if you lose or duplicate a single row, what's the impact? It's low, or in general, zero. We're |
| 59:14 | within a margin of error. At the end of the day, you're not interested in each individual click on your site — we're |
| 59:20 | interested in the total count per day, per week, per month. We don't care about the exact heartbeat from 5 |
| 59:26 | minutes ago — we care about the average per hour, the average during a workout, or the average during sleep, and so on. |
| 59:32 | That's why starting at the beginning of the 2010s, non-relational databases started to emerge — not |
| 59:37 | because relational databases are bad, but databases created to answer |
| 59:43 | different situations, particularly Big Data, where we want to deal with series of consolidated data where write speed |
| 59:50 | and low latency take priority over consistency. We want to be able to write to |
| 59:55 | multiple servers at the same time, even if for some period of time data is slightly |
| 1:00:01 | inconsistent. The problem is how to distribute the load — both processing for reads and for |
| 1:00:07 | writes — and how to split data across multiple different servers to allow scalability. To recap: |
| 1:00:14 | relational databases work very well on a single server, offering the ACID guarantees — |
| 1:00:20 | Atomicity, Consistency, Isolation, and Durability — that we all love. They have options for scaling via read-only replicas and |
| 1:00:27 | even bidirectional replication to a degree, which is always complicated. But for Big Data situations and massive |
| 1:00:34 | write volumes, it starts to become a complicated, painful task with few options. |
| 1:00:39 | There's no avoiding mentioning the famous CAP theorem, proposed by Eric Brewer in |
| 1:00:45 | the year 2000. It was a watershed moment in the study of distributed systems, and you'll probably learn about it in a |
| 1:00:51 | Computer Science course. In summary, it proposes that truly distributed databases — meaning those |
| 1:00:57 | running across multiple servers or multiple nodes of a cluster — can satisfy at most two of three properties: |
| 1:01:04 | Consistency, Availability, and Partition Tolerance. |
| 1:01:09 | Either we have Consistency and Availability, but the system doesn't tolerate partitions — meaning |
| 1:01:16 | some nodes of the cluster can go offline suddenly, which isn't great because it's not impossible for a server to have issues — |
| 1:01:23 | or even we need to take one down for maintenance. So we want Consistency and Partition Tolerance, but then we have low |
| 1:01:29 | Availability. Or we go for the ideal — Availability and Partition Tolerance, but we'll have low Consistency, which is |
| 1:01:36 | what we call eventual consistency, where a server for a brief period of time may not have the same data as the |
| 1:01:43 | other servers. CAP is a theorem, not a theory — meaning it's not a law. When you study it, you'll find that not everyone |
| 1:01:50 | agrees with all the arguments, in particular because the terms Consistency, Availability, and Partition Tolerance |
| 1:01:57 | can easily be misinterpreted — there's no very precise definition for each thing. And everyone knows what |
| 1:02:03 | happens when terms are open to interpretation: nobody agrees. And that |
| 1:02:09 | happens frequently, because in my head I want to talk about Consistency, but you're interpreting it as Integrity, |
| 1:02:14 | which is a different thing. Then there's the problem of the binary nature of it — this is one of the |
| 1:02:19 | few places where we truly can't take it literally: that we can only choose two properties out of three. In |
| 1:02:26 | the case of having Availability and Partition Tolerance, it doesn't mean we'll have zero Consistency. It depends. If |
| 1:02:32 | we need strong Consistency, where it's mandatory that all replicas always have exactly the same correct data, |
| 1:02:40 | we can have weak, eventual consistency, where for a few seconds the data differs between servers. |
| 1:02:46 | Again, in a bank we can't have a balance, refresh the browser, and see a different balance. But in the heartbeat example, |
| 1:02:52 | if a beat is missing for a minute, it's not a problem. It doesn't mean you had a cardiac arrest out of nowhere. |
| 1:02:57 | Another thing is Partition Tolerance — again, think of a data center where a large service might |
| 1:03:04 | have a distributed database across multiple data centers: a dozen servers in New York, another dozen in |
| 1:03:11 | London, all synchronized. But then we have an internet outage between them — an undersea |
| 1:03:16 | cable goes down, the fiber optic fails. It's rare but it happens. And the system |
| 1:03:22 | needs to know what to do when that happens — i.e., be tolerant of that network partition. The problem is that this |
| 1:03:29 | is really very rare to happen. Our infrastructure in the 2020s is a thousand |
| 1:03:34 | times better than in the 2000s. Hardware, networks in general, are much more stable. |
| 1:03:40 | So our systems don't need to be so aggressive in preparing for a situation that rare. Maybe it's better to be |
| 1:03:46 | optimized for the assumption that it won't happen, and put in a graceful degradation strategy in case it does — |
| 1:03:53 | like simply a "please wait a few seconds" page. Even if there's a network outage, today it recovers in a few |
| 1:03:59 | minutes. In the old days it could take hours or days. These are some of the considerations when discussing the CAP |
| 1:04:06 | theorem. In practice, we'll deal with some sharding strategy and some data replication strategy. Replication is like what |
| 1:04:14 | happens with a relational database, where we can add nodes to the network and they receive a copy of the data. |
| 1:04:20 | Each server will be identical to the other, providing redundancy and making it possible to spread the |
| 1:04:26 | user load across more servers. In the case of relational databases, because of the characteristic of strong consistency, |
| 1:04:32 | we're limited in how many servers we can have for writes. In an AP system with eventual consistency, |
| 1:04:39 | any node can be used for writes, but it takes some time to replicate the data to the other |
| 1:04:44 | servers. Consistency will exist, but it'll be eventual — meaning eventually everything will be consistent. |
| 1:04:52 | Actually, AP databases like Cassandra or DynamoDB let you configure |
| 1:04:57 | what level of consistency you want — stronger or weaker. We can configure that depending on |
| 1:05:03 | the needs. One thing is a small cluster of three servers all running in the same data center on the same network. |
| 1:05:09 | Another thing is multiple clusters of dozens of servers across several |
| 1:05:14 | different data centers, like Netflix's operation. Databases like Cassandra or DynamoDB were built more |
| 1:05:21 | for situations where we need to run across multiple data centers divided into different geographic regions — one in |
| 1:05:29 | Japan, another in Europe, another in the Americas — and all servers in all clusters |
| 1:05:36 | synchronizing with each other. Not a situation we'll encounter every day. For most medium-sized companies, |
| 1:05:42 | dealing with that infrastructure from scratch — the most practical thing would be to use |
| 1:05:48 | DynamoDB on AWS. Like everything on AWS, they manage most of that complexity so we can |
| 1:05:54 | just use it. Of course, because of that, the cost per transaction is much higher. But that's the trade-off — either we need to study it, |
| 1:06:00 | or we'll have to invest in hiring specialized infrastructure staff |
| 1:06:06 | to be on call 24/7 dealing with bare-metal hardware in a data center. Both Cassandra and DynamoDB offer |
| 1:06:13 | partitioning and replication capabilities. MongoDB also has this, but it calls them Sharding and Replica Sets. What we're after is the |
| 1:06:20 | ability to partition data across multiple servers in a balanced way, and to have replication between |
| 1:06:27 | some of those servers for redundancy — if one of them has an issue and goes down, there's another identical copy to |
| 1:06:33 | keep serving the same data. It's very complex to detail in a single video, but I wanted you to at least |
| 1:06:39 | know that this exists, so you know where to look later. For now, it's interesting to know the last concept — |
| 1:06:45 | going back to the example from the beginning with the contacts table made in DBF with dBase. Remember I said that even |
| 1:06:50 | with the name index, I'd need to search by the full name to find something. Today in any database, they all offer some way to |
| 1:06:57 | search partially or for similar-sounding words — that's what Elasticsearch, Solr, or the full-text |
| 1:07:03 | search in PostgreSQL and other databases offer. It's a different kind of index for that type of search. I explained this |
| 1:07:09 | in detail in the Twitter episode — check that one out. Back in the '80s, we didn't have the processing power to |
| 1:07:16 | do things like that. Instead of trying to remember if Brian Russell has two S's or |
| 1:07:21 | two L's, in many cases it was easier to remember his code — the ID. That's why every table — we got used to putting |
| 1:07:27 | that code, just like every purchase order has a code, just like every person in this country has a CPF — every |
| 1:07:34 | row in a table has a numeric code we use as a primary key. Or in the case of professional databases, we use it to |
| 1:07:40 | link a row in one table to a row in another table. We call those IDs foreign |
| 1:07:46 | keys, because they're foreign to the table. The way now considered wrong, especially in code that we |
| 1:07:53 | expose to users, is to make that primary key an auto-incrementing integer — starting at 1, the next |
| 1:07:59 | row is 2, the one after that is 3, and so on. A security mistake that was very common in the old days was to have a |
| 1:08:05 | web application where the URL shows that code. For example, let's say you had mercadolivre.com/users/1, which is the URL for |
| 1:08:12 | the page with a user's profile data. A well-built system — when the user logs in, I store their ID in the |
| 1:08:19 | session. When they navigate to other private pages, we check the ID in the session before showing the info. If |
| 1:08:25 | they try to access a URL with a different user's ID, we can invalidate the request and return a 403 Forbidden error. |
| 1:08:32 | That would be the correct approach. But in a large system, someone might let a bug slip through, and then someone on the outside notices |
| 1:08:38 | that the site is using auto-incrementing IDs and their ID is, say, 1,000. Obviously that means there are users |
| 1:08:46 | below 1,000 and some above, and they'll start trying to brute-force IDs until some page opens on another user's account. |
| 1:08:52 | The right way has no such bug, but it's also not great to hand out information for free about the existence of |
| 1:08:58 | other users with easily guessable IDs. The ideal is to use a giant random number. A 32-bit integer field |
| 1:09:04 | can hold numbers from 0 to over 4 billion. But if it's a 64-bit integer, |
| 1:09:09 | we're in the order of 18 million trillion. That's a massive number. So we don't need to use sequential auto-increment — |
| 1:09:17 | random numbers will be nearly impossible to guess someone's ID. For that, we use |
| 1:09:24 | generator functions like UUIDs. We don't even need to use the full number it generates — |
| 1:09:30 | just truncate it and take a piece of it. The chances of collision — meaning picking a number that already |
| 1:09:36 | exists in your table — will be astronomically low. And since the correct thing is to have primary key fields |
| 1:09:43 | with a unique constraint, it won't let you insert a duplicate ID. There are dozens of strategies to |
| 1:09:48 | generate random IDs — it's worth taking time to research and avoid sequential numbers. We call these |
| 1:09:54 | surrogate keys. It's not a law, but it's good practice. For internal tables whose IDs you'll never show in |
| 1:10:01 | public, it's more or less a moot point. I explained this because in distributed systems we have the problem of |
| 1:10:06 | balancing data across different servers. When we replicate data, we're making a copy of the data from |
| 1:10:13 | one server to another for redundancy. But in a large distributed system, we want to split up the |
| 1:10:19 | processing — and that requires some servers to have data that other servers don't have. Let me give a dumb |
| 1:10:25 | example. Let's say I work at the IRS and want to make a single database |
| 1:10:31 | with all the income tax of all people and companies in a single database — that's pretty heavy. Even more so |
| 1:10:37 | if there's historical information for everyone going back decades. One naive way to deal with this is to manually split the |
| 1:10:44 | data — for example, I could have a server with data from the Southeast region, another server just for the South region, |
| 1:10:51 | another just for the Northeast, and so on. The problem is one server will keep having more data volume than |
| 1:10:56 | the other — it won't be balanced. Quickly the Southeast region will need to be split — then we'd have |
| 1:11:02 | a server just for São Paulo separated out. But even São Paulo alone will always have way more volume than everything else. |
| 1:11:08 | So let's split at least just the city of São Paulo onto its own server. See how horrible it is to try to split |
| 1:11:14 | data manually like this? And worse, in software we'd have to do something like: São Paulo — query server X, Northeast — query server Y. |
| 1:11:21 | That quickly becomes a mess. There's a better solution. But first, let's look at another |
| 1:11:26 | balancing approach. Someone might think: what if we stop looking at the data content? Forget about region or |
| 1:11:34 | state — let's look only at the IDs. In that case, let's say the IDs are numeric and sequential — exactly what I said not to do. |
| 1:11:41 | So we have three servers — let's call them A, B, and C — and 12 items in the table with IDs from 1 to 12. How |
| 1:11:47 | do I split those 12 items across three servers? Easy. How about using |
| 1:11:52 | modulo of the ID? Remember the idea of modulo. In this case we'll do modulo 3. Modulo is when you |
| 1:11:58 | take the remainder of dividing one number by another. For example, 1 modulo 3 is 1. 2 modulo 3 is 2. |
| 1:12:04 | 3 modulo 3 is 0, because 3 divided by 3 is 1 with remainder 0. Interesting thing is above that: 4 |
| 1:12:11 | divided by 3 is 1 with remainder 1 — modulo is 1. 5 divided by 3 is 1 with |
| 1:12:16 | remainder 2 — modulo is 2. But 6 divided by 3 is exactly 2 with remainder 0 — modulo |
| 1:12:22 | is 0. Any number modulo 3 will be a number from 0 to 2 — it'll always cycle. Arbitrarily assigning |
| 1:12:30 | server A as 0, B as 1, and C as 2, we know how to distribute each of the 12 rows across each of the three servers. |
| 1:12:37 | Get it? So server A would have IDs: 3, 6, 9, 12 — wait, that's C. A has 1, 4, 7, 10. Server B |
| 1:12:45 | has IDs 2, 5, 8, and 11. And server C has IDs 3, 6, |
| 1:12:50 | 9, 12 — all multiples of 3. And every time we want to insert a new row, we do modulo of the ID and see which |
| 1:12:58 | server to send it to. This guarantees all of them will be balanced — all will have exactly the same number of rows. |
| 1:13:03 | Problem solved, right? But this is the IRS — they grow indefinitely. Very |
| 1:13:08 | soon three servers won't be enough. We need to add a new server. Now we're screwed — the modulo-3 |
| 1:13:15 | math becomes modulo-4, meaning we need to rebalance all data across |
| 1:13:20 | all servers. In the new configuration, each ID will end up on a different server than it was before. This strategy |
| 1:13:27 | works for balancing when we never change the number of servers, but it doesn't scale if we need to add new ones, |
| 1:13:33 | because we have to move all data everywhere to rebalance. That's why consistent hashing was invented |
| 1:13:40 | in distributed computing — it's a scheme for organizing IDs that allows adding or removing servers without |
| 1:13:47 | having to move all data around every time. It achieves this by organizing all IDs on a ring — a circle of |
| 1:13:54 | hash values. To understand hashing, I recommend watching the first episode on cryptography. In brief, very briefly: |
| 1:14:01 | a hash is a function that takes any input — for example, a string — and returns a fixed-size number. But it's a |
| 1:14:07 | non-reversible function — meaning from the number, you can't recover the original string, because multiple |
| 1:14:14 | strings can map to the same number. The function only guarantees that if you pass the same string, you'll get the same number. |
| 1:14:20 | Depending on the function, it returns a number up to a certain size. For example, SHA-512 returns a |
| 1:14:27 | number of up to 512 bits. The maximum number of 512 bits is absurdly large — bigger than |
| 1:14:33 | the number of atoms in the visible universe. Obviously that's way overkill for an ID field. In Cassandra, there's another |
| 1:14:40 | non-cryptographic hash function — meaning it shouldn't be used for cryptography, but it's good enough for |
| 1:14:45 | ID purposes — MurmurHash, which returns hashes of 64 bits. The maximum number is on the order of millions of trillions — |
| 1:14:52 | still a massive number, but more manageable. Anyway, the main point is that in consistent hashing, we consider a |
| 1:14:59 | ring that goes from zero to that maximum 64-bit number. Then we hash the IDs of the servers. Let's say |
| 1:15:05 | we have four servers — they distribute around the ring. The nice thing about a hash function is that it tends to have |
| 1:15:11 | a uniform distribution — the opposite of sequential. We can generate the hash of the data record using some combination of |
| 1:15:18 | various data like the IP address of the user plus the timestamp, or whatever. For example, imagine a ring where |
| 1:15:25 | each point on that ring starts at zero at the top, and has all numbers up to 2 to the power of 64 at the end of the ring — where it closes |
| 1:15:33 | back to zero to complete the circle. You understand all possible hash values are on the ring. Then we apply the hash function using |
| 1:15:39 | the names and IP addresses of each server, and they fall arbitrarily around the ring. Just for the example: server A up at the top, |
| 1:15:46 | then B further to the right, then C further down to the left. Let's insert some data. Let's say the |
| 1:15:53 | hash of the record name. The first record has the name John, and let's say the hash generated falls between node A and node B. |
| 1:16:00 | The rule is to choose the server with the hash greater than or equal to the ID's hash, looking clockwise. |
| 1:16:07 | In that case it will be node B. The next record has the name Fred, and the hash happens to land here between |
| 1:16:13 | B and C — it falls on node C. And the last record, with the name Susan, falls between C and A, so it goes to A. |
| 1:16:19 | Always clockwise. Great. And what's the advantage of this? Well, let's go back to the scenario where we want to add a |
| 1:16:26 | new server — node D. Its hash falls here between C and A, but |
| 1:16:32 | after Susan. What happens is that all data with hashes after C that |
| 1:16:37 | were landing on node A now get moved to node D. That's how it rebalances. But pay attention — |
| 1:16:44 | in the example of the simple modulo function, we'd need to move all data across all servers. Here, the data on |
| 1:16:50 | servers B and C don't need to be touched — only the data on A needs to be split. Records with IDs greater |
| 1:16:56 | than D and less than A stay on A. Let's say server A has a problem — |
| 1:17:01 | it needs to be removed. Now every record that previously fell on A — by the rule of looking at the next server |
| 1:17:06 | clockwise on the ring — will now fall on B. Just that. No data on any other server needs to be touched. |
| 1:17:13 | Put simply, that's how we guarantee having the smallest amount possible of data being moved when the |
| 1:17:20 | infrastructure changes. The idea is to move the smallest amount of data possible when we need to add |
| 1:17:26 | new servers. There are several nuances to this strategy — for example, when removing a node, it can happen that another |
| 1:17:33 | node ends up accumulating too much data. To avoid that, each node can have multiple |
| 1:17:38 | virtual nodes — or vnodes — which place it in multiple positions on the ring, so the data |
| 1:17:43 | can be better rebalanced. If you're interested, read the documentation on sites like |
| 1:17:49 | Cassandra's documentation, or the DynamoDB paper from Amazon. Said like that, it sounds easy. But in |
| 1:17:54 | DynamoDB, for example, you have to understand the concept of partition key and optional sort key. Data |
| 1:18:02 | with the same partition key falls in the same partition — obviously. The problem is if we want to do a query that |
| 1:18:08 | needs to look up data in multiple partitions. For that there are commands like SCAN, but that's a much more |
| 1:18:14 | expensive operation than searching within a single partition. |
| 1:18:19 | Therefore, the partitioning strategy needs to be very well defined upfront. Otherwise you'll have obstacles — you won't be able to do |
| 1:18:27 | fast queries when you need to. Things aren't automatic. We trade convenience for performance. In a |
| 1:18:33 | relational database where normally everything is together, you just run a SQL command and you have |
| 1:18:39 | what you want, fast. In a distributed system, things are distributed and we need to factor that in. |
| 1:18:46 | In DynamoDB, which is offered as an AWS service, we need to understand our application's behavior well — |
| 1:18:52 | not just to avoid making operations harder later, but because the billing is also not simple. You don't just pay per |
| 1:18:59 | gigabyte stored. You need to calculate the number of writes per second, the number of reads per |
| 1:19:05 | second during peak, the duration of each read operation, the percentage of read capacity you want to keep |
| 1:19:11 | reserved, the consistency level of the reads — how many you want to be strongly consistent, how many |
| 1:19:17 | weakly consistent. For example, on their online calculator, the price per |
| 1:19:22 | gigabyte in the east region is less than $0.25 per month, great. But with 10 non-transactional writes, 100 |
| 1:19:29 | writes per second at peak hours, and 400 reads per second at peak — 72 hours operating at peak during |
| 1:19:35 | a month with reserved write capacity — it can come to over |
| 1:19:40 | $23 per month, plus $150 you need to put up front as a reservation. Then continuing with the |
| 1:19:47 | default values for reads — just not to make it tedious — three dollars per month and another $30 up front. So |
| 1:19:54 | per month in this configuration, you'll pay around $26 plus $180 up front at the |
| 1:20:00 | start. And this configuration is the most basic for a tiny app. In the category of databases in the NoSQL camp |
| 1:20:06 | offered as a service — meaning you don't need to know how to configure and manage the infrastructure — there are |
| 1:20:13 | various other options like MongoDB Atlas or Google Firebase, which is quite |
| 1:20:18 | popular for small applications because up to 1 GB of messaging and up to 1 GB of storage and 5 GB of Cloud Storage, |
| 1:20:25 | the cost is free. And MongoDB Atlas you pay pretty cheap — $0.10 per million |
| 1:20:30 | read operations, and a recommended $57 per month for a dedicated solution of 10 GB to up to four terabytes of storage. It's not |
| 1:20:37 | simple to calculate the real price you'll pay with dozens of parameters to |
| 1:20:42 | consider — like number of function calls and gigabytes per second, or minutes of |
| 1:20:48 | cloud builds, or gigabytes transferred over the network, and more. The price will vary according to your app's success or failure — |
| 1:20:54 | the more it fails, the cheaper. The more successful it is, the more expensive it gets. At the start it seems |
| 1:21:00 | like a huge advantage, but right when you're succeeding and think you're going to make good money is also when they'll charge |
| 1:21:06 | you the most. That's the double-edged sword of services you don't manage — the bill will eventually come. And that doesn't even count the |
| 1:21:13 | cost of developing and maintaining your application. The more exotic a database is, the harder it'll be to |
| 1:21:19 | find qualified professionals or train them in-house. Just because a database is exotic doesn't mean it solves all |
| 1:21:26 | your problems. In many cases, someone might choose Google Firebase out of hype, but in reality the development |
| 1:21:33 | would have been cheaper if they had chosen, say, MongoDB or PostgreSQL. |
| 1:21:38 | Both Firebase and MongoDB have the flexibility to handle JSON-style documents without needing to understand the more |
| 1:21:44 | rigid structure of a relational database schema. But just saying JSON doesn't mean they're equal. MongoDB |
| 1:21:51 | allows handling more complex embedded sub-documents. |
| 1:21:56 | Firebase's model is much simpler, but Firebase has real-time updates, which is important for those who |
| 1:22:01 | develop mobile applications — changes in the database can be pushed as notifications directly to users in |
| 1:22:08 | real time. MongoDB doesn't have that natively — you can do it, but it takes more work, which means more development cost. |
| 1:22:15 | On the other hand, if you want to do more complex queries, MongoDB has a more advanced query language, |
| 1:22:21 | including things like joins and secondary indexes. Firebase has that capability but it's more limited. Same with |
| 1:22:28 | transactions — everyone avoids relational databases but they all love to have transactions and strongly consistent |
| 1:22:34 | data. MongoDB has better transaction support than Firebase. Again, if you want something similar to |
| 1:22:41 | transactions in Firebase, the development cost goes up. And if transactions are really important, maybe a |
| 1:22:48 | relational database like AWS RDS would have been better in the first place. But the advantage of being SaaS means |
| 1:22:55 | both MongoDB Atlas and Firebase Firestore have automatic scalability and replication across multiple |
| 1:23:01 | regions for high availability — meaning if uptime and guaranteeing you never go down is paramount, both can |
| 1:23:07 | help with that. But you'll pay for it and it won't be cheap. As I explained, the pricing |
| 1:23:14 | model is complex — you need to necessarily spend time researching and evaluating very carefully what will happen not just |
| 1:23:21 | now when your app is starting out, but six months in if it's successful. There's no way for me to explain every database |
| 1:23:29 | offered as a service today. Amazon is the most famous — everyone chooses AWS RDS |
| 1:23:34 | for SQL Server or PostgreSQL as a service. But Google also has Cloud SQL as a competitor — |
| 1:23:40 | it'll depend on pricing and features that may be important for you. Beyond them, there's Azure SQL Database, and I believe even Oracle |
| 1:23:46 | offers their database as a service now. To complicate things, Amazon itself offers similar products on |
| 1:23:53 | the same platform, like Amazon Aurora, which looks like RDS. Aurora is a |
| 1:24:00 | superior database product for MySQL and PostgreSQL compared to RDS — it has greater availability guarantees, double the |
| 1:24:06 | performance on the same hardware profile, easier scalability options, |
| 1:24:11 | backup and replication options. But obviously it costs more. So there's SQL for |
| 1:24:17 | every need and budget. Let's say you're a NoSQL purist and really don't want SQL. Then there's |
| 1:24:25 | MongoDB Atlas and Google Firestore that I already mentioned. But there are more options. For the enterprise world, SAP |
| 1:24:32 | offers HANA — the Hana Enterprise Cloud. There's DataStax DB, which offers a managed version of Cassandra. And there's Astra |
| 1:24:39 | from DataStax — also Cassandra as a service. Not counting Redis, which offers Redis as a service. In terms of caching, |
| 1:24:45 | Memcached and Redis — on AWS, there's ElastiCache as I mentioned. There's a service for everyone — you just need to be able to pay. |
| 1:24:52 | But for you who are just starting in programming, don't get fooled by hype. Again, we've been |
| 1:24:57 | discussing this topic since at least 2008, and I can guarantee you a few things: there's no consensus, for the simple |
| 1:25:05 | fact that each database has strengths and weaknesses. Each one serves different situations. For |
| 1:25:12 | very small applications, it doesn't really matter — you'll choose a relational SQL database like MariaDB or PostgreSQL, |
| 1:25:18 | or you'll go straight to Firebase. You have very little data, you have very few problems to deal with. The first version |
| 1:25:24 | of anything you make will always be that — a version 1.0. Only when you have |
| 1:25:29 | real users, real data, real revenue — only then will you |
| 1:25:34 | really understand what you need. And if you get stuck trying to use one tool for everything, soon you'll have |
| 1:25:40 | so many problems and ignore that there are already solutions for each issue — you run the risk of failing out of ignorance. |
| 1:25:48 | When in doubt, the most common solution is the same: AWS RDS for PostgreSQL or MariaDB — which is what |
| 1:25:54 | the vast majority of frameworks use, like Ruby on Rails, Laravel, Spring. Then a caching solution using |
| 1:26:01 | Memcached or Redis. And for that, AWS ElastiCache. And finally, async jobs — whether with Kafka or AWS SQS. |
| 1:26:08 | And that solves 90% of your problems. If you need something for JSON documents, PostgreSQL already supports that |
| 1:26:15 | natively. Or just make a prototype — maybe go Firebase if that's the case. If you happen to be in the rare category of Big Data, it means |
| 1:26:22 | you're not a micro startup or a freelancer — you're already a medium-sized company. That's a different tier. You'll be looking at Aurora |
| 1:26:29 | and data solutions like Apache Spark — a lot of custom stuff. |
| 1:26:35 | You'll need to have experienced infrastructure professionals around. That category is not for amateurs. So if |
| 1:26:41 | you're a beginner, don't worry about this too early. You are not — and never will be — Netflix. |
| 1:26:47 | At the end of the day, understanding databases — whether relational or NoSQL — means understanding the problem you |
| 1:26:54 | want to solve first. Then applying fundamentals of computer science — trees, data structures, networking, |
| 1:27:00 | operating systems, cryptography fundamentals — and following useless Twitter drama in the dev bubble will only |
| 1:27:06 | confuse you. There's never anything useful there and you'll just be another sheep following the herd. Instead, go research the official documentation |
| 1:27:13 | of each thing. The vast majority of beginner programmers today have the same problem: ignoring fundamentals, |
| 1:27:20 | ignoring the problems they want to solve, and choosing based on likes and influencers. Nobody knows your particular situation. |
| 1:27:27 | Obviously it'll go badly. If you have any doubts, drop them in the comments below. If you liked the video, |
| 1:27:32 | hit the like button, subscribe to the channel, and don't forget to share the video with your friends. See you next time. |
| 1:27:44 | and we can use that's how we can |
| 1:27:50 | the phone number which is a little the edges of the disks |
| 1:27:59 | holy s**t, this is a different train different from a tree |
| 1:28:23 | what the f**k, now I get it how to do |
| 1:28:29 | requires you to install an agent |
| 1:28:35 | each delivery, what route |
| 1:28:42 | a server — happens when we have when Atlas as well as Firestore, Firestore |
| 1:28:51 | that you're not a micro — not a micro company |
| 1:29:00 | what the f**k |
