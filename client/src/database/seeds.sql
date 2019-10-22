INSERT INTO leaderboard (leader_name, leader_portrait, leader_atk, leader_hp)
VALUES
("William the Conqueror", "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE4MDAzNDEwNzQ3ODE5NTM0/william-the-conqueror-9542227-1-402.jpg", 30, 30),
("Hannibal Barca", "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE4MDAzNDEwNTQ2MzYxODcw/hannibal-9327767-1-402.jpg", 30, 30),
("Joan of Arc", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Joan_of_Arc_miniature_graded.jpg/300px-Joan_of_Arc_miniature_graded.jpg", 30, 30),
("Tomoe Gozen", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Tomoe-Gozen.jpg/800px-Tomoe-Gozen.jpg", 30, 30),
("Boudica", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Boadicea_Haranguing_the_Britons_%28called_Boudicca%2C_or_Boadicea%29_by_John_Opie.jpg/800px-Boadicea_Haranguing_the_Britons_%28called_Boudicca%2C_or_Boadicea%29_by_John_Opie.jpg", 30, 30),
("Grace O’Malley", "https://allthatsinteresting.com/wordpress/wp-content/uploads/2018/03/grace-omalley.jpg", 30, 30),
("Alaric the Visigoth", "https://www.bbc.co.uk/staticarchive/163555f174737053c6fdb2a235751ceeeea0b554.jpg", 30, 30),
("Harold Godwinson", "https://spartacus-educational.com/00haroldW.jpeg", 30, 30), 
("Vercingetorix", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Alise-Sainte-Reine_statue_Vercingetorix_par_Millet_2crop.jpg/800px-Alise-Sainte-Reine_statue_Vercingetorix_par_Millet_2crop.jpg", 30, 30), 
("Loren", "https://i.pinimg.com/originals/a3/d9/a8/a3d9a8ee80b82155914584d5d9df6cdd.jpg", 30, 30);


INSERT INTO items (item_name, item_img, item_atk, item_hp)
VALUES
("Potion of Rage","https://nerdarchy.com/wp-content/uploads/2016/09/small-art-potion-300x300.jpg", 5, 0),
("Potion of Calm", "https://vignette.wikia.nocookie.net/forgottenrealms/images/3/3c/Keog5e.jpeg/revision/latest?cb=20180925144924", 0, 5),
("Gauntlets of the Inferno", "https://vignette.wikia.nocookie.net/shop-heroes/images/0/0c/Gloves_Flaming_Hands.png/revision/latest?cb=20151210223802", 10, -5),
("Armor of the Mountain", "https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/112/1000/1000/636284703865068888.jpeg", -5, 10),
("Belt of Giant's Strength", "https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/128/1000/1000/636284711140631974.jpeg", +10, 0),
("Boots of Cat's Grace", "https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/136/1000/1000/636284714256851023.jpeg", +0, +10),
("Blade of Irresistable Force", "https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/190/1000/1000/636284728491570118.jpeg", +20, -10),
("Shield of the Immovable Object", "https://www.dandwiki.com/w/images/3/3f/Oblivion_Spellbreaker.png", -10, 20);

INSERT INTO portraits (port_url, port_sex)
VALUES
("https://www-hireanillustrator-com-i.exactdn.com/i/images/2018/07/Hayley_Vildenwal_portrait_finalsm-600x750.jpg?strip=all&lossy=0&quality=90&ssl=1", "m"),
("https://www-hireanillustrator-com-i.exactdn.com/i/images/2018/07/Wurz_Milo_gnome_finalsm-600x750.jpg?strip=all&lossy=0&quality=90&ssl=1", 'm'),
("https://www-hireanillustrator-com-i.exactdn.com/i/images/2018/07/Dietrich_Morthai_finalsm-600x750.jpg?strip=all&lossy=0&quality=90&ssl=1", "m"),
("https://i.pinimg.com/736x/bb/40/61/bb4061d4001e06358a578515cfa2fd69.jpg", "m"),
("https://ksr-ugc.imgix.net/assets/011/269/534/12da0a7e58aefe536e29cff97b9bf4ea_original.png?ixlib=rb-2.1.0&crop=faces&w=1552&h=873&fit=crop&v=1463673857&auto=format&frame=1&q=92&s=233d2c8e4e1abc9731df2b7a5466da56", "m"),
("https://cdnb.artstation.com/p/assets/images/images/008/163/915/large/tsuki-draws-jijis-lala.jpg?1510870351", "m"),
("https://farm1.static.flickr.com/957/28427057998_a2f91fbc5e_b.jpg", "m"),
("https://www-hireanillustrator-com-i.exactdn.com/i/images/2018/07/Melanie_gnomeportrait_finalsm-600x750.jpg?strip=all&lossy=0&quality=90&ssl=1", "f"),
("https://www-hireanillustrator-com-i.exactdn.com/i/images/2018/07/honeycutt_genasibard_finalsm-600x750.jpg?strip=all&lossy=0&quality=90&ssl=1", "f"),
("https://cdna.artstation.com/p/assets/images/images/013/656/358/large/stephanie-brown-nbrown-aasimar-finalsm.jpg?1540577995", "f"),
("https://cdna.artstation.com/p/assets/images/images/003/581/382/large/kirill-repin-08-portrait-v03.jpg?1475238912&dl=1", "f"),
("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxsrAOxHer5z0L_0OsSnPP4a_0XV5bdV0VkisKwovyGpCWu552EQ", "f"),
("https://i.pinimg.com/originals/a9/ff/bb/a9ffbb4e87614878388faa76113af34a.png", "f"),
("https://i.pinimg.com/236x/96/85/c5/9685c5ea55a65ec3de3dd3c013f6d3a7--character-portraits-character-art.jpg", "f");