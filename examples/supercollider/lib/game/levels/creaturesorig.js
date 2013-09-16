ig.module( 'game.levels.creaturesorig' )
.requires( 'impact.image','plusplus.entities.conversation','game.entities.spawner-character-libraried','plusplus.entities.levelchange','game.entities.villain-friendly','plusplus.entities.checkpoint','game.entities.leech-crab-hungry','game.entities.leech-crab','game.entities.player','game.entities.leech-crab-wander','game.entities.leech-crab-flying','game.entities.leech-crab-flying-predator','game.entities.leech-crab-prey' )
.defines(function(){
LevelCreaturesorig=/*JSON[*/{"entities":[{"type":"EntityConversation","x":160,"y":32,"settings":{"size":{"x":16,"y":192},"steps":{"1":{"name":"villain","text":"hey chubs! still hungry?"},"2":{"name":"chubs","text":"om nom nom"}},"target":{"1":"villain"}}},{"type":"EntityConversation","x":72,"y":208,"settings":{"steps":{"1":{"name":"villain","text":"this is the colony, only my favorite room!"},"2":{"text":"beep","name":"stu"},"3":{"text":"thats stu, he just sits up there all day","name":"villain"}},"delay":1}},{"type":"EntitySpawnerCharacterLibraried","x":208,"y":160,"settings":{"spawningEntity":"EntityLeechPlant","duration":-1,"respawnDelay":8,"activated":"true"}},{"type":"EntityLevelchange","x":496,"y":192,"settings":{"size":{"x":16,"y":32},"levelName":"ui","playerSpawnerName":"left"}},{"type":"EntitySpawnerCharacterLibraried","x":256,"y":160,"settings":{"spawningEntity":"EntityLeechPlant","duration":-1,"respawnDelay":8,"activated":"true","size":{"x":16,"y":16}}},{"type":"EntityVillainFriendly","x":132,"y":200},{"type":"EntityCheckpoint","x":464,"y":192,"settings":{"size":{"x":16,"y":32},"name":"right"}},{"type":"EntityCheckpoint","x":64,"y":192,"settings":{"size":{"x":16,"y":32},"name":"left"}},{"type":"EntitySpawnerCharacterLibraried","x":232,"y":160,"settings":{"spawningEntity":"EntityLeechPlant","duration":-1,"respawnDelay":8,"activated":"true"}},{"type":"EntityLevelchange","x":32,"y":192,"settings":{"size":{"x":16,"y":32},"levelName":"abilities","playerSpawnerName":"right"}},{"type":"EntityConversation","x":288,"y":32,"settings":{"size":{"x":16,"y":192},"steps":{"1":{"name":"villain","text":"have you seen bizz?"},"2":{"name":"bizz","text":"bizzznizzzz"}},"lockingPlayer":"true"}},{"type":"EntityConversation","x":384,"y":32,"settings":{"size":{"x":16,"y":192},"steps":{"1":{"name":"jobo","text":"meeeeep"},"2":{"name":"villain","text":"bobo, the flying one, chases jobo in circles all day"},"3":{"text":"we've learned that flee pathfinding is more expensive than normal pathfinding","name":"villain"},"4":{"text":"but wandering is cheap!","name":"villain"},"5":{"name":"villain","text":"and when you need to fine tune the paths, we've got pathfinding maps"}},"lockingPlayer":"true","autoAdvance":"false"}},{"type":"EntityLeechCrabHungry","x":168,"y":168,"settings":{"name":"chubs"}},{"type":"EntityLeechCrab","x":100,"y":168,"settings":{"flip":{"x":"true"},"name":"stu"}},{"type":"EntityPlayer","x":64,"y":200},{"type":"EntityLeechCrabWander","x":236,"y":216},{"type":"EntityLeechCrabFlying","x":208,"y":68,"settings":{"name":"bizz"}},{"type":"EntityLeechCrabFlyingPredator","x":424,"y":52},{"type":"EntityLeechCrabPrey","x":380,"y":120,"settings":{"name":"jobo"}}],"layer":[{"name":"collision","width":34,"height":16,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":16,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],[0,0,0,0,1,36,37,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,15,1,0,0,0,0],[0,0,0,1,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,1,0,0,0],[0,0,1,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,1,0,0],[0,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,48,12,12,12,48,48,0,0,0,8,1,0],[0,1,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,49,49,0,0,0,49,49,0,0,0,19,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,49,49,0,0,0,49,49,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,12,12,12,12,12,12,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,12,12,0,0,12,12,0,0,48,48,12,12,12,12,12,12,48,48,0,0,12,12,12,12,12,12,0,0,12,12,1,0],[0,1,0,0,0,0,0,0,0,0,49,49,0,0,0,0,0,0,49,49,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,49,49,0,0,0,0,0,0,49,49,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"walls","width":34,"height":16,"linkWithCollision":false,"visible":1,"tilesetName":"media/tileset_walls.png","repeat":false,"preRender":false,"distance":"1","tilesize":16,"foreground":false,"data":[[0,0,0,0,0,0,0,33,31,30,31,32,33,29,30,31,32,33,29,29,30,31,32,33,31,32,31,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,89,90,91,92,89,90,89,90,89,89,89,90,93,89,90,89,94,90,89,90,0,0,0,0,0,0,0],[0,0,0,0,0,145,146,147,145,146,147,145,146,147,145,146,147,145,146,147,145,146,147,145,146,147,145,146,147,0,0,0,0,0],[0,0,0,0,147,145,146,147,145,146,147,145,146,147,145,146,147,145,146,147,145,146,147,145,146,147,145,146,147,145,0,0,0,0],[0,0,0,158,159,157,158,159,157,158,159,157,158,159,157,158,159,157,158,159,157,158,159,157,158,159,157,158,159,157,158,0,0,0],[0,0,169,170,171,157,146,147,169,170,171,157,146,147,169,170,171,145,146,147,169,125,126,84,78,80,125,126,171,145,146,147,0,0],[0,0,145,146,147,145,146,159,157,146,147,145,146,171,157,146,147,145,146,171,145,137,138,157,158,159,137,138,147,145,146,159,0,0],[5,65,157,158,159,157,158,171,145,146,159,157,146,147,145,146,159,157,158,171,157,137,138,169,170,171,137,138,159,157,158,171,53,21],[8,65,169,170,171,157,158,159,157,158,171,145,146,171,157,158,171,157,158,159,169,78,81,78,78,78,78,78,171,157,146,159,53,19],[8,65,157,158,159,157,170,171,157,158,159,157,158,171,169,170,171,157,170,171,157,158,159,157,158,171,145,146,159,145,146,171,53,19],[6,65,169,170,171,145,146,147,169,170,171,145,146,147,145,146,171,157,146,147,145,146,171,157,158,147,157,158,171,157,158,147,53,17],[5,65,145,146,147,145,146,147,145,146,125,126,78,81,78,83,84,78,125,126,157,158,147,145,146,147,145,146,147,145,146,147,53,17],[7,65,157,158,159,157,158,159,157,158,137,138,158,159,157,158,159,157,137,138,157,158,159,157,146,171,157,158,159,157,158,159,53,19],[5,65,169,170,171,169,170,171,169,170,137,138,170,171,169,170,171,169,137,138,157,170,171,169,170,171,169,170,171,169,170,171,53,21],[7,52,77,79,80,81,77,77,77,77,78,78,78,82,77,77,77,78,77,77,80,77,77,77,78,78,79,82,77,83,82,77,61,17],[25,41,43,43,44,41,42,43,44,45,41,42,43,44,45,42,43,44,45,43,44,45,43,43,43,44,41,42,41,42,43,44,45,38]]},{"name":"slopes","width":34,"height":16,"linkWithCollision":false,"visible":1,"tilesetName":"media/tileset_slopes.png","repeat":false,"preRender":false,"distance":"1","tilesize":16,"foreground":false,"data":[[0,0,0,0,0,128,129,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,126,127,0,0,0,0,0],[0,0,0,0,12,141,142,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,139,140,11,0,0,0,0],[0,0,0,12,25,154,155,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,152,153,24,50,0,0,0],[0,0,51,25,38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,37,63,11,0,0],[0,51,64,38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,76,24,11,0],[192,193,194,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,189,190,191],[205,206,207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,202,203,204],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"details","width":34,"height":16,"linkWithCollision":false,"visible":1,"tilesetName":"media/tileset_details.png","repeat":false,"preRender":false,"distance":"1","tilesize":16,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,58,0,0,0,0,0,0,58,0,0,0,0,0,0,58,0,0,0,0,0,0,58,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,171,172,173,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,171,172,173,0,0,0,188,189,190,0,0,0,171,172,173,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,188,189,190,0,0,0,205,206,207,0,0,0,188,189,190,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,205,206,207,0,0,0,0,0,0,0,0,0,205,206,207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,174,175,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,176,177,0,0],[0,0,191,192,0,114,115,133,134,0,0,0,0,0,0,0,0,0,0,0,0,114,131,133,132,133,132,133,134,0,193,194,0,0],[0,62,208,209,0,99,101,102,100,0,0,0,178,145,145,145,145,179,0,0,0,99,101,102,101,102,101,102,100,0,210,211,61,0],[0,79,130,0,0,99,118,119,82,0,0,0,0,0,0,0,0,0,0,0,0,99,118,119,118,119,118,119,82,0,0,130,78,0],[0,96,0,0,107,99,135,136,0,0,0,0,0,0,0,0,0,0,0,0,0,99,135,136,135,136,135,136,107,0,0,0,95,0],[0,113,0,0,0,178,145,145,179,0,0,0,0,0,0,0,0,0,0,0,0,178,145,145,145,145,145,145,179,0,0,0,112,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"shadows","width":34,"height":16,"linkWithCollision":false,"visible":1,"tilesetName":"media/tileset_details.png","repeat":false,"preRender":false,"distance":"1","tilesize":16,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,160,0,0,0,0,0,0,160,0,0,0,0,0,0,160,0,0,0,0,0,0,160,0,0,0,0,0,0,0],[0,0,0,0,156,154,155,0,0,0,0,156,154,155,0,0,0,0,156,154,155,0,0,0,0,156,154,155,0,0,0,0,0,0],[0,0,0,156,154,154,154,155,0,0,156,154,154,154,155,0,0,156,154,154,154,0,0,0,0,154,154,154,138,0,0,0,0,0],[0,0,156,154,154,154,154,154,155,156,154,154,154,154,154,155,156,154,154,154,154,0,0,137,137,137,0,0,137,138,0,0,0,0],[0,0,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,0,0,137,137,137,0,0,137,137,138,0,0,0],[0,0,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,0,0,0,0,0,0,0,137,137,137,138,0,0],[0,0,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,155,140,137,137,137,137,137,137,137,137,137,0,0],[0,0,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,154,155,140,137,137,137,137,137,137,137,137,0,0],[0,0,154,154,154,154,0,0,154,159,0,0,0,0,0,0,0,0,0,0,157,154,0,0,140,137,137,137,137,137,137,137,0,0],[0,0,154,154,154,154,0,0,159,139,0,0,137,137,137,137,137,137,0,0,138,157,0,0,0,140,137,137,137,137,137,137,0,0],[0,0,154,154,154,154,0,0,139,137,0,0,137,137,137,137,137,137,0,0,137,138,0,0,0,0,140,137,137,137,137,137,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"pathfinding","width":34,"height":16,"linkWithCollision":false,"visible":1,"tilesetName":"media/pathfindingtiles_plusplus_16.png","repeat":false,"preRender":false,"distance":"1","tilesize":16,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}]}/*]JSON*/;
LevelCreaturesorigResources=[new ig.Image('media/tileset_walls.png'), new ig.Image('media/tileset_slopes.png'), new ig.Image('media/tileset_details.png'), new ig.Image('media/tileset_details.png'), new ig.Image('media/pathfindingtiles_plusplus_16.png')];
});