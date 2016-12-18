class TerrainController{
  constructor(x, y, id, configs){
    this.configs = configs;

    this.idTerrain = id;
    /**
    ID list:
    //-------------------------------on_land------------------------------------
    1:grass
    1222:grassSnow
    2:hill
    2222:hillSnow
    3:mountain
    3222:mountainSnow
    4:tree
    4222:treeSnow
    52211:bridge_ngang
    52212:bridgeSnow_ngang
    52221:bridge_doc
    52222:bridgeSnow_doc
    //-------------------------------on_sea-------------------------------------
    10 : cliff1
    11 : cliff2
    12 : cliff3
    13 : cliff4
    14 : cliff5
    15 : cliff6
    16 : cliff7
    17 : cliff8
    18 : cliff9
    19 : cliff10
    20 : cliff11
    21 : cliff12
    22 : cliff13
    23 : cliff14

    102 : cliffSnow1
    112 : cliffSnow2
    122 : cliffSnow3
    132 : cliffSnow4
    142 : cliffSnow5
    152 : cliffSnow6
    162 : cliffSnow7
    172 : cliffSnow8
    182 : cliffSnow9
    192 : cliffSnow10
    202 : cliffSnow11
    212 : cliffSnow12
    222 : cliffSnow13
    232 : cliffSnow14

    24 : seaShore1
    25 : seaShore2
    26 : seaShore3
    27 : seaShore4
    28 : seaShore5
    29 : seaShore6
    30 : seaShore7
    31 : seaShore8
    32 : seaShore9
    33 : seaShore10
    34 : seaShore11
    35 : seaShore12
    242 : seaShoreSnow1
    252 : seaShoreSnow2
    262 : seaShoreSnow3
    272 : seaShoreSnow4
    282 : seaShoreSnow5
    292 : seaShoreSnow6
    302 : seaShoreSnow7
    312 : seaShoreSnow8
    322 : seaShoreSnow9
    332 : seaShoreSnow10
    342 : seaShoreSnow11
    352 : seaShoreSnow12

    38:deepSea
    382:deepSeaSnow
//---------------------------river----------------------------------------------
    4110 : river1
    4111 : river2
    4112 : river3
    4113 : river4
    4114 : river5
    4115 : river6
    4116 : river7
    4117 : river8
    41102 : riverSnow1
    41112: riverSnow2
    41122 : riverSnow3
    41132 : riverSnow4
    41142 : riverSnow5
    41152 : riverSnow6
    41162 : riverSnow7
    41172 : riverSnow8
    //-------------------------------Road---------------------------------------
    4110 : road1
    4111 : road2
    4112 : road3
    4113 : road4
    4114 : road5
    4115 : road6
    4116 : road7
    4117 : road8
    4118 : road9
    4119 : road10
    4120 : road11
    41102 : roadSnow1
    41112 : roadSnow2
    41122 : roadSnow3
    41132 : roadSnow4
    41142 : roadSnow5
    41152 : roadSnow6
    41162 : roadSnow7
    41172 : roadSnow8
    41182 : roadSnow9
    41192 : roadSnow10
    41202 : roadSnow11

    //-------------------------------City---------------------------------------
    47:red_main_city
    48:red_bo_binh_city
    49:red_san_bay
    50:red_normal_city
    51:red_habor
    472:red_Snow_main_city
    482:red_Snow_bo_binh_city
    492:red_Snow_san_bay
    502:red_Snow_normal_city
    512:red_Snow_habor
    52:green_main_city
    53:green_bo_binh_city
    54:green_san_bay
    55:green_normal_city
    56:green_habor
    522:green_Snow_main_city
    532:green_Snow_bo_binh_city
    542:green_Snow_san_bay
    552:green_Snow_normal_city
    562:green_Snow_habor
    57:gold_main_city
    58:gold_bo_binh
    59:gold_san_bay
    60:gold_normal_city
    61:gold_habor
    572:gold_Snow_main_city
    582:gold_Snow_bo_binh
    592:gold_Snow_san_bay
    602:gold_Snow_normal_city
    612:gold_Snow_habor
    62:silver_main_city
    63:silver_bo_binh_city
    64:silver_san_bay
    65:silver_normal_city
    66:silver_habor
    622:silver_Snow_main_city
    632:silver_Snow_bo_binh_city
    642:silver_Snow_san_bay
    652:silver_Snow_normal_city
    662:silver_Snow_habor
    67:blue_main_city
    68:blue_bo_binh
    69:blue_san_bay
    70:blue_normal_city
    71:blue_habor
    672:blue_Snow_main_city
    682:blue_Snow_bo_binh
    692:blue_Snow_san_bay
    702:blue_Snow_normal_city
    712:blue_Snow_habor

    72: free City
    73: free-factory
    74: free san_bay
    75: free harbor
    722: free-Snow-City
    732: free-SNow-factory
    742: free-Snow-san_bay
    752: free-Snow-harbor
    //-------------------------------end---------------------------------------
    **/
    if (this.idTerrain == 1) {
      Advwar.terrainControllers[x].push(new TerrainGrass(x, y, {
        img : 'grass.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 1222){
      Advwar.terrainControllers[x].push(new TerrainGrass(x, y, {
        img : 'grassSnow.png',
        snow : true
      }));
    }//-------------------------------------------------------------------------
    else if (this.idTerrain == 2) {
      Advwar.terrainControllers[x].push(new TerrainHill(x, y, {
        img : 'hill.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 2222) {
      Advwar.terrainControllers[x].push(new TerrainHill(x, y, {
        img : 'hillSnow.png',
        snow : true
      }));
    }//-------------------------------------------------------------------------
    else if (this.idTerrain == 3) {
      Advwar.terrainControllers[x].push(new TerrainMountain(x, y, {
        img : 'moutain.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 3222) {
      Advwar.terrainControllers[x].push(new TerrainMountain(x, y, {
        img : 'mountainSnow.png',
        snow : true
      }));
    }//-------------------------------------------------------------------------
    else if (this.idTerrain == 4) {
      Advwar.terrainControllers[x].push(new TerrainTree(x, y, {
        img : 'tree.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 4222) {
      Advwar.terrainControllers[x].push(new TerrainTree(x, y, {
        img : 'treeSnow.png',
        snow : true
      }));
    }//-------------------------------------------------------------------------
    /**
    52211:bridge_ngang
    52212:bridgeSnow_ngang
    52221:bridge_doc
    52222:bridgeSnow_doc
    **/
    else if (this.idTerrain == 52211) {
      Advwar.terrainControllers[x].push(new TerrainBridge(x, y, {
        img : 'bridgeRight.png',
        snow : false
      }));
    }else if (this.idTerrain == 52212) {
      Advwar.terrainControllers[x].push(new TerrainBridge(x, y, {
        img : 'bridgeUp.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 52221) {
      Advwar.terrainControllers[x].push(new TerrainBridge(x, y, {
        img : 'bridgeSnowRight.png',
        snow : true
      }));
    }else if (this.idTerrain == 52222) {
      Advwar.terrainControllers[x].push(new TerrainBridge(x, y, {
        img : 'bridgeSnowRight.png',
        snow : true
      }));
    }//-------------------------------------------------------------------------
    /**
    10 : cliff1
    11 : cliff2
    12 : cliff3
    13 : cliff4
    14 : cliff5
    15 : cliff6
    16 : cliff7
    17 : cliff8
    18 : cliff9
    19 : cliff10
    20 : cliff11
    21 : cliff12
    **/
    else if (this.idTerrain == 10) {
      Advwar.terrainControllers[x].push(new TerrainCliff(x, y, {
        img : 'cliff1.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 11) {
      Advwar.terrainControllers[x].push(new TerrainCliff(x, y, {
        img : 'cliff2.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 12) {
      Advwar.terrainControllers[x].push(new TerrainCliff(x, y, {
        img : 'cliff3.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 13) {
      Advwar.terrainControllers[x].push(new TerrainCliff(x, y, {
        img : 'cliff4.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 14) {
      Advwar.terrainControllers[x].push(new TerrainCliff(x, y, {
        img : 'cliff5.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 15) {
      Advwar.terrainControllers[x].push(new TerrainCliff(x, y, {
        img : 'cliff6.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 16) {
      Advwar.terrainControllers[x].push(new TerrainCliff(x, y, {
        img : 'cliff7.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 17) {
      Advwar.terrainControllers[x].push(new TerrainCliff(x, y, {
        img : 'cliff8.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 18) {
      Advwar.terrainControllers[x].push(new TerrainCliff(x, y, {
        img : 'cliff9.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 19) {
      Advwar.terrainControllers[x].push(new TerrainCliff(x, y, {
        img : 'cliff10.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 20) {
      Advwar.terrainControllers[x].push(new TerrainCliff(x, y, {
        img : 'cliff11.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 21) {
      Advwar.terrainControllers[x].push(new TerrainCliff(x, y, {
        img : 'cliff12.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 102) {
      Advwar.terrainControllers[x].push(new TerrainCliff(x, y, {
        img : 'cliffSnow1.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 112) {
      Advwar.terrainControllers[x].push(new TerrainCliff(x, y, {
        img : 'cliffSnow2.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 122) {
      Advwar.terrainControllers[x].push(new TerrainCliff(x, y, {
        img : 'cliffSnow3.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 132) {
      Advwar.terrainControllers[x].push(new TerrainCliff(x, y, {
        img : 'cliffSnow4.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 142) {
      Advwar.terrainControllers[x].push(new TerrainCliff(x, y, {
        img : 'cliffSnow5.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 152) {
      Advwar.terrainControllers[x].push(new TerrainCliff(x, y, {
        img : 'cliffSnow6.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 162) {
      Advwar.terrainControllers[x].push(new TerrainCliff(x, y, {
        img : 'cliffSnow7.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 172) {
      Advwar.terrainControllers[x].push(new TerrainCliff(x, y, {
        img : 'cliffSnow8.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 182) {
      Advwar.terrainControllers[x].push(new TerrainCliff(x, y, {
        img : 'cliffSnow9.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 192) {
      Advwar.terrainControllers[x].push(new TerrainCliff(x, y, {
        img : 'cliffSnow10.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 202) {
      Advwar.terrainControllers[x].push(new TerrainCliff(x, y, {
        img : 'cliffSnow11.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 212) {
      Advwar.terrainControllers[x].push(new TerrainCliff(x, y, {
        img : 'cliffSnow12.png',
        snow : true
      }));
    }
    //--------------------------------------------------------------------------
    /**
    24 : seaShore1
    25 : seaShore2
    26 : seaShore3
    27 : seaShore4
    28 : seaShore5
    29 : seaShore6
    30 : seaShore7
    31 : seaShore8
    32 : seaShore9
    33 : seaShore10
    34 : seaShore11
    35 : seaShore12
    **/
    else if (this.idTerrain == 24) {
      Advwar.terrainControllers[x].push(new TerrainSeaShore(x, y, {
        img : 'seaShore1.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 25) {
      Advwar.terrainControllers[x].push(new TerrainSeaShore(x, y, {
        img : 'seaShore2.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 26) {
      Advwar.terrainControllers[x].push(new TerrainSeaShore(x, y, {
        img : 'seaShore3.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 27) {
      Advwar.terrainControllers[x].push(new TerrainSeaShore(x, y, {
        img : 'seaShore4.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 28) {
      Advwar.terrainControllers[x].push(new TerrainSeaShore(x, y, {
        img : 'seaShore5.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 29) {
      Advwar.terrainControllers[x].push(new TerrainSeaShore(x, y, {
        img : 'seaShore6.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 30) {
      Advwar.terrainControllers[x].push(new TerrainSeaShore(x, y, {
        img : 'seaShore7.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 31) {
      Advwar.terrainControllers[x].push(new TerrainSeaShore(x, y, {
        img : 'seaShore8.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 32) {
      Advwar.terrainControllers[x].push(new TerrainSeaShore(x, y, {
        img : 'seaShore9.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 33) {
      Advwar.terrainControllers[x].push(new TerrainSeaShore(x, y, {
        img : 'seaShore10.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 34) {
      Advwar.terrainControllers[x].push(new TerrainSeaShore(x, y, {
        img : 'seaShore11.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 35) {
      Advwar.terrainControllers[x].push(new TerrainSeaShore(x, y, {
        img : 'seaShore12.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 242) {
      Advwar.terrainControllers[x].push(new TerrainSeaShore(x, y, {
        img : 'seaShoreSnow1.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 252) {
      Advwar.terrainControllers[x].push(new TerrainSeaShore(x, y, {
        img : 'seaShoreSnow2.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 262) {
      Advwar.terrainControllers[x].push(new TerrainSeaShore(x, y, {
        img : 'seaShoreSnow3.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 272) {
      Advwar.terrainControllers[x].push(new TerrainSeaShore(x, y, {
        img : 'seaShoreSnow4.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 282) {
      Advwar.terrainControllers[x].push(new TerrainSeaShore(x, y, {
        img : 'seaShoreSnow5.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 292) {
      Advwar.terrainControllers[x].push(new TerrainSeaShore(x, y, {
        img : 'seaShoreSnow6.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 302) {
      Advwar.terrainControllers[x].push(new TerrainSeaShore(x, y, {
        img : 'seaShoreSnow7.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 312) {
      Advwar.terrainControllers[x].push(new TerrainSeaShore(x, y, {
        img : 'seaShoreSnow8.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 322) {
      Advwar.terrainControllers[x].push(new TerrainSeaShore(x, y, {
        img : 'seaShoreSnow9.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 332) {
      Advwar.terrainControllers[x].push(new TerrainSeaShore(x, y, {
        img : 'seaShoreSnow10.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 342) {
      Advwar.terrainControllers[x].push(new TerrainSeaShore(x, y, {
        img : 'seaShoreSnow11.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 352) {
      Advwar.terrainControllers[x].push(new TerrainSeaShore(x, y, {
        img : 'seaShoreSnow12.png',
        snow : true
      }));
    }
    //--------------------------------------------------------------------------
    /**
    4110 : road1
    4111 : road2
    4112 : road3
    4113 : road4
    4114 : road5
    4115 : road6
    4116 : road7
    4117 : road8
    4118 : road9
    4119 : road10
    4120 : road11
    41102 : roadSnow1
    41112 : roadSnow2
    41122 : roadSnow3
    41132 : roadSnow4
    41142 : roadSnow5
    41152 : roadSnow6
    41162 : roadSnow7
    41172 : roadSnow8
    41182 : roadSnow9
    41192 : roadSnow10
    41202 : roadSnow11
    **/
    else if (this.idTerrain == 4110) {
      Advwar.terrainControllers[x].push(new TerrainRoad(x, y, {
        img : 'road1.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 4111) {
      Advwar.terrainControllers[x].push(new TerrainRoad(x, y, {
        img : 'road2.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 4112) {
      Advwar.terrainControllers[x].push(new TerrainRoad(x, y, {
        img : 'road3.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 4113) {
      Advwar.terrainControllers[x].push(new TerrainRoad(x, y, {
        img : 'road4.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 4114) {
      Advwar.terrainControllers[x].push(new TerrainRoad(x, y, {
        img : 'road5.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 4115) {
      Advwar.terrainControllers[x].push(new TerrainRoad(x, y, {
        img : 'road6.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 4116) {
      Advwar.terrainControllers[x].push(new TerrainRoad(x, y, {
        img : 'road7.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 4117) {
      Advwar.terrainControllers[x].push(new TerrainRoad(x, y, {
        img : 'road8.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 4118) {
      Advwar.terrainControllers[x].push(new TerrainRoad(x, y, {
        img : 'road9.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 4119) {
      Advwar.terrainControllers[x].push(new TerrainRoad(x, y, {
        img : 'road10.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 4120) {
      Advwar.terrainControllers[x].push(new TerrainRoad(x, y, {
        img : 'road11.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 41102) {
      Advwar.terrainControllers[x].push(new TerrainRoad(x, y, {
        img : 'roadSnow1.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 41112) {
      Advwar.terrainControllers[x].push(new TerrainRoad(x, y, {
        img : 'roadSnow2.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 41122) {
      Advwar.terrainControllers[x].push(new TerrainRoad(x, y, {
        img : 'roadSnow3.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 41132) {
      Advwar.terrainControllers[x].push(new TerrainRoad(x, y, {
        img : 'roadSnow4.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 41142) {
      Advwar.terrainControllers[x].push(new TerrainRoad(x, y, {
        img : 'roadSnow5.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 41152) {
      Advwar.terrainControllers[x].push(new TerrainRoad(x, y, {
        img : 'roadSnow6.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 41162) {
      Advwar.terrainControllers[x].push(new TerrainRoad(x, y, {
        img : 'roadSnow7.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 41172) {
      Advwar.terrainControllers[x].push(new TerrainRoad(x, y, {
        img : 'roadSnow8.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 41182) {
      Advwar.terrainControllers[x].push(new TerrainRoad(x, y, {
        img : 'roadSnow9.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 41192) {
      Advwar.terrainControllers[x].push(new TerrainRoad(x, y, {
        img : 'roadSnow10.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 41202) {
      Advwar.terrainControllers[x].push(new TerrainRoad(x, y, {
        img : 'roadSnow11.png',
        snow : false
      }));
    }

    //--------------------------------------------------------------------------
    /**
    4010 : river1
    4011 : river2
    4012 : river3
    4013 : river4
    4014 : river5
    4015 : river6
    4016 : river7
    4017 : river8
    40102 : riverSnow1
    40112: riverSnow2
    40122 : riverSnow3
    40132 : riverSnow4
    40142 : riverSnow5
    40152 : riverSnow6
    40162 : riverSnow7
    40172 : riverSnow8
    **/
    else if (this.idTerrain == 4010) {
      Advwar.terrainControllers[x].push(new TerrainRiver(x, y, {
        img : 'river1.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 4011) {
      Advwar.terrainControllers[x].push(new TerrainRiver(x, y, {
        img : 'river2.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 4012) {
      Advwar.terrainControllers[x].push(new TerrainRiver(x, y, {
        img : 'river3.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 4013) {
      Advwar.terrainControllers[x].push(new TerrainRiver(x, y, {
        img : 'river4.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 4014) {
      Advwar.terrainControllers[x].push(new TerrainRiver(x, y, {
        img : 'river5.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 4015) {
      Advwar.terrainControllers[x].push(new TerrainRiver(x, y, {
        img : 'river6.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 4016) {
      Advwar.terrainControllers[x].push(new TerrainRiver(x, y, {
        img : 'river7.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 40102) {
      Advwar.terrainControllers[x].push(new TerrainRiver(x, y, {
        img : 'riverSnow1.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 40112) {
      Advwar.terrainControllers[x].push(new TerrainRiver(x, y, {
        img : 'riverSnow2.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 40132) {
      Advwar.terrainControllers[x].push(new TerrainRiver(x, y, {
        img : 'riverSnow3.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 40142) {
      Advwar.terrainControllers[x].push(new TerrainRiver(x, y, {
        img : 'riverSnow4.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 40152) {
      Advwar.terrainControllers[x].push(new TerrainRiver(x, y, {
        img : 'riverSnow5.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 40162) {
      Advwar.terrainControllers[x].push(new TerrainRiver(x, y, {
        img : 'riverSnow6.png',
        snow : true
      }));
    }
    else if (this.idTerrain == 40172) {
      Advwar.terrainControllers[x].push(new TerrainRiver(x, y, {
        img : 'riverSnow7.png',
        snow : true
      }));
    }
    //--------------------------------------------------------------------------
    /**
    47:red_main_city
    48:red_bo_binh_city
    49:red_san_bay
    50:red_normal_city
    51:red_habor
    472:red_Snow_main_city
    482:red_Snow_bo_binh_city
    492:red_Snow_san_bay
    502:red_Snow_normal_city
    512:red_Snow_habor
    52:green_main_city
    53:green_bo_binh_city
    54:green_san_bay
    55:green_normal_city
    56:green_habor
    522:green_Snow_main_city
    532:green_Snow_bo_binh_city
    542:green_Snow_san_bay
    552:green_Snow_normal_city
    562:green_Snow_habor
    57:gold_main_city
    58:gold_bo_binh
    59:gold_san_bay
    60:gold_normal_city
    61:gold_habor
    572:gold_Snow_main_city
    582:gold_Snow_bo_binh
    592:gold_Snow_san_bay
    602:gold_Snow_normal_city
    612:gold_Snow_habor
    62:silver_main_city
    63:silver_bo_binh_city
    64:silver_san_bay
    65:silver_normal_city
    66:silver_habor
    622:silver_Snow_main_city
    632:silver_Snow_bo_binh_city
    642:silver_Snow_san_bay
    652:silver_Snow_normal_city
    662:silver_Snow_habor
    67:blue_main_city
    68:blue_bo_binh
    69:blue_san_bay
    70:blue_normal_city
    71:blue_habor
    672:blue_Snow_main_city
    682:blue_Snow_bo_binh
    692:blue_Snow_san_bay
    702:blue_Snow_normal_city
    712:blue_Snow_habor
    **/
    else if (this.idTerrain == 47) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'redMainCity.png',
        cityType : 1,
        colour : 1,
        snow : false
      }));
    }
    else if (this.idTerrain == 48) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'redFactory.png',
        cityType : 2,
        colour : 1,
        snow : false
      }));
    }
    else if (this.idTerrain == 49) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'redAirport.png',
        cityType : 3,
        colour : 1,
        snow : false
      }));
    }
    else if (this.idTerrain == 50) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'redCity.png',
        cityType : 4,
        colour : 1,
        snow : false
      }));
    }
    else if (this.idTerrain == 51) {
      Advwar.terrainControllers[x].push(new TerrainCityHabor(x, y, {
        img : 'redHabor.png',
        colour : 1,
        snow : false
      }));
    }
    else if (this.idTerrain == 472) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'redSnowMainCity.png',
        cityType : 1,
        colour : 1,
        snow : true
      }));
    }
    else if (this.idTerrain == 482) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'redSnowFactory.png',
        cityType : 2,
        colour : 1,
        snow : true
      }));
    }
    else if (this.idTerrain == 492) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'redSnowAirPort.png',
        cityType : 3,
        colour : 1,
        snow : true
      }));
    }
    else if (this.idTerrain == 502) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'redSnowcity.png',
        cityType : 4,
        colour : 1,
        snow : true
      }));
    }
    else if (this.idTerrain == 512) {
      Advwar.terrainControllers[x].push(new TerrainCityHabor(x, y, {
        img : 'redSnowHabor.png',
        colour : 1,
        snow : true
      }));
    }
    //--------------------------------------------------------------------------
    else if (this.idTerrain == 52) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'greenMainCity.png',
        cityType : 1,
        colour : 2,
        snow : false
      }));
    }
    else if (this.idTerrain == 53) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'greenFactory.png',
        cityType : 2,
        colour : 2,
        snow : false
      }));
    }
    else if (this.idTerrain == 54) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'greenAirport.png',
        cityType : 3,
        colour : 2,
        snow : false
      }));
    }
    else if (this.idTerrain == 55) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'greenCity.png',
        cityType : 4,
        colour : 2,
        snow : false
      }));
    }
    else if (this.idTerrain == 56) {
      Advwar.terrainControllers[x].push(new TerrainCityHabor(x, y, {
        img : 'greenHabor.png',
        colour : 2,
        snow : false
      }));
    }
    else if (this.idTerrain == 522) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'greenSnowMainCity.png',
        cityType : 1,
        colour : 2,
        snow : true
      }));
    }
    else if (this.idTerrain == 532) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'greenSnowFactory.png',
        cityType : 2,
        colour : 2,
        snow : true
      }));
    }
    else if (this.idTerrain == 542) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'greenSnowAirport.png',
        cityType : 3,
        colour : 2,
        snow : true
      }));
    }
    else if (this.idTerrain == 552) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'greenSnowCity.png',
        cityType : 4,
        colour : 2,
        snow : true
      }));
    }
    else if (this.idTerrain == 562) {
      Advwar.terrainControllers[x].push(new TerrainCityHabor(x, y, {
        img : 'greenSnowHabor.png',
        colour : 2,
        snow : true
      }));
    }
    //--------------------------------------------------------------------------
    else if (this.idTerrain == 57) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'yellowMainCity.png',
        cityType : 1,
        colour : 3,
        snow : false
      }));
    }
    else if (this.idTerrain == 58) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'yellowFactory.png',
        cityType : 2,
        colour : 3,
        snow : false
      }));
    }
    else if (this.idTerrain == 59) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'yellowAirport.png',
        cityType : 3,
        colour : 3,
        snow : false
      }));
    }
    else if (this.idTerrain == 60) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'yellowCity.png',
        cityType : 4,
        colour : 3,
        snow : false
      }));
    }
    else if (this.idTerrain == 61) {
      Advwar.terrainControllers[x].push(new TerrainCityHabor(x, y, {
        img : 'yellowHabor.png',
        colour : 3,
        snow : false
      }));
    }
    else if (this.idTerrain == 572) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'yellowSnowMainCity.png',
        cityType : 1,
        colour : 3,
        snow : true
      }));
    }
    else if (this.idTerrain == 582) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'yellowSnowFactory.png',
        cityType : 2,
        colour : 3,
        snow : true
      }));
    }
    else if (this.idTerrain == 592) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'yellowSnowAirport.png',
        cityType : 3,
        colour : 3,
        snow : true
      }));
    }
    else if (this.idTerrain == 602) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'yellowSnowCity.png',
        cityType : 4,
        colour : 3,
        snow : true
      }));
    }
    else if (this.idTerrain == 612) {
      Advwar.terrainControllers[x].push(new TerrainCityHabor(x, y, {
        img : 'yellowSnowHabor.png',
        colour : 3,
        snow : true
      }));
    }
    //--------------------------------------------------------------------------
    else if (this.idTerrain == 62) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'silverMainCity.png',
        cityType : 1,
        colour : 4,
        snow : false
      }));
    }
    else if (this.idTerrain == 63) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'silverFactory.png',
        cityType : 2,
        colour : 4,
        snow : false
      }));
    }
    else if (this.idTerrain == 64) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'silverAirport.png',
        cityType : 3,
        colour : 4,
        snow : false
      }));
    }
    else if (this.idTerrain == 65) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'silverCity.png',
        cityType : 4,
        colour : 4,
        snow : false
      }));
    }
    else if (this.idTerrain == 66) {
      Advwar.terrainControllers[x].push(new TerrainCityHabor(x, y, {
        img : 'silverHabor.png',
        colour : 4,
        snow : false
      }));
    }
    else if (this.idTerrain == 622) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'silverMainCity.png',
        cityType : 1,
        colour : 4,
        snow : true
      }));
    }
    else if (this.idTerrain == 632) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'silverFactory.png',
        cityType : 2,
        colour : 4,
        snow : true
      }));
    }
    else if (this.idTerrain == 642) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'silverAirport.png',
        cityType : 3,
        colour : 4,
        snow : true
      }));
    }
    else if (this.idTerrain == 652) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'silverCity.png',
        cityType : 4,
        colour : 4,
        snow : true
      }));
    }
    else if (this.idTerrain == 662) {
      Advwar.terrainControllers[x].push(new TerrainCityHabor(x, y, {
        img : 'silverHabor.png',
        colour : 4,
        snow : true
      }));
    }
    //--------------------------------------------------------------------------
    else if (this.idTerrain == 67) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'blueMainCity.png',
        cityType : 1,
        colour : 5,
        snow : false
      }));
    }
    else if (this.idTerrain == 68) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'blueFactory.png',
        cityType : 2,
        colour : 5,
        snow : false
      }));
    }
    else if (this.idTerrain == 69) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'blueAirport.png',
        cityType : 3,
        colour : 5,
        snow : false
      }));
    }
    else if (this.idTerrain == 70) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'blueCity.png',
        cityType : 4,
        colour : 5,
        snow : false
      }));
    }
    else if (this.idTerrain == 71) {
      Advwar.terrainControllers[x].push(new TerrainCityHabor(x, y, {
        img : 'blueHabor.png',
        colour : 5,
        snow : false
      }));
    }
    else if (this.idTerrain == 672) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'blueSnowMainCity.png',
        cityType : 1,
        colour : 5,
        snow : true
      }));
    }
    else if (this.idTerrain == 682) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'blueSnowFactory.png',
        cityType : 2,
        colour : 5,
        snow : true
      }));
    }
    else if (this.idTerrain == 692) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'blueSnowAirport.png',
        cityType : 3,
        colour : 5,
        snow : true
      }));
    }
    else if (this.idTerrain == 702) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'blueSnowCity.png',
        cityType : 4,
        colour : 5,
        snow : true
      }));
    }
    else if (this.idTerrain == 712) {
      Advwar.terrainControllers[x].push(new TerrainCityHabor(x, y, {
        img : 'blueSnowHabor.png',
        colour : 5,
        snow : true
      }));
    }
    /**
    72: free City
    73: free-factory
    74: free san_bay
    75: free harbor
    722: free-Snow-City
    732: free-SNow-factory
    742: free-Snow-san_bay
    752: free-Snow-harbor
    **/
    else if (this.idTerrain == 72) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'freeCity.png',
        cityType : 4,
        colour : 5,
        snow : false
      }));
    }
    else if (this.idTerrain == 73) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'freeFactory.png',
        cityType : 2,
        colour : 5,
        snow : false
      }));
    }
    else if (this.idTerrain == 74) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'freeAirport.png',
        cityType : 3,
        colour : 5,
        snow : false
      }));
    }
    else if (this.idTerrain == 75) {
      Advwar.terrainControllers[x].push(new TerrainCityHabor(x, y, {
        img : 'freeHabor.png',
        colour : 5,
        snow : true
      }));
    }
    else if (this.idTerrain == 722) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'freeSnowCity.png',
        cityType : 4,
        colour : 5,
        snow : true
      }));
    }
    else if (this.idTerrain == 732) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'freeSnowFactory.png',
        cityType : 2,
        colour : 5,
        snow : true
      }));
    }
    else if (this.idTerrain == 742) {
      Advwar.terrainControllers[x].push(new TerrainCity(x, y, {
        img : 'freeSnowAirport.png',
        cityType : 3,
        colour : 5,
        snow : true
      }));
    }
    else if (this.idTerrain == 752) {
      Advwar.terrainControllers[x].push(new TerrainCityHabor(x, y, {
        img : 'freeSnowHabor.png',
        colour : 5,
        snow : true
      }));
    }
    //--------------------------------------------------------------------------
    else if (this.idTerrain == 38) {
      Advwar.terrainControllers[x].push(new TerrainDeepSea(x, y, {
        img : 'deepSea.png',
        snow : false
      }));
    }
    else if (this.idTerrain == 382) {
      Advwar.terrainControllers[x].push(new TerrainDeepSea(x, y, {
        img : 'deepSeaSnow.png',
        snow : true
      }));
    }//-------------------------------------------------------------------------
  }
}
