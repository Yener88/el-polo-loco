const level1 = new Level(
    [
        new Chicken(500),
        new Chicken(800),
        new Chicken(950),
        new Chicken(1200),
        new Chicken(1500),
        new Chicken(1550),
        new Chicken(1800),
        new Chicken(2000),
        new Chicken(2100),
        new Chicken(2250),
        new Chicken(2300),
        new Chicken(2500),
        new Chicken(2800),
        new Chicken(3100),
        new Chicken(3400),
        new Chicken(3750),
        new Chicken(4000),
        new Chicken(4200),
        new Chicken(4600),
        new Chicken(4850),
        new Chicken(5000),
        new Chicken(5200),
        new Chicken(5300),
        new Chicken(5600),
        new Chicken(5900),
        new Chicken(6100),
        new Chicken(6200),
        new Chicken(6500),
    ],
    [
        new Endboss(2200),
    ],
    [
        new BackgroundObject('img/backgroundobjects/sky/sky.png', 0),
        new BackgroundObject('img/backgroundobjects/sky/sky.png', 959),
        new BackgroundObject('img/backgroundobjects/sky/sky.png', 1915),
        new BackgroundObject('img/backgroundobjects/sky/sky.png', 2870),
        new BackgroundObject('img/backgroundobjects/desert3/1.png', 0),
        new BackgroundObject('img/backgroundobjects/desert3/2.png', 960),
        new BackgroundObject('img/backgroundobjects/desert3/1.png', 1920),
        new BackgroundObject('img/backgroundobjects/desert3/2.png', 2880),
        new BackgroundObject('img/backgroundobjects/desert2/1.png', 0),
        new BackgroundObject('img/backgroundobjects/desert2/2.png', 960),
        new BackgroundObject('img/backgroundobjects/desert2/1.png', 1920),
        new BackgroundObject('img/backgroundobjects/desert2/2.png', 2880),
        new BackgroundObject('img/backgroundobjects/desert1/1.png', 0),
        new BackgroundObject('img/backgroundobjects/desert1/2.png', 960),
        new BackgroundObject('img/backgroundobjects/desert1/1.png', 1920),
        new BackgroundObject('img/backgroundobjects/desert1/2.png', 2880),
    ],
    [
        new Clouds('img/backgroundobjects/clouds/1.png', 0),
        new Clouds('img/backgroundobjects/clouds/2.png', 960),
        new Clouds('img/backgroundobjects/clouds/1.png', 1920),
        new Clouds('img/backgroundobjects/clouds/2.png', 2880),
    ],
    [
        new CollectableObject('img/collectableobjects/bottle/bottlestuck2.png', 700, 400),
        new CollectableObject('img/collectableobjects/bottle/bottlestuck1.png', 900, 400),
        new CollectableObject('img/collectableobjects/bottle/bottlestuck1.png', 1900, 400),
        new CollectableObject('img/collectableobjects/bottle/bottlestuck1.png', 2600, 400),
        new CollectableObject('img/collectableobjects/bottle/bottlestuck2.png', 2800, 400),
    ],
    [
        new CollectableObject('img/collectableobjects/coin.png', 600, 350),
        new CollectableObject('img/collectableobjects/coin.png', 700, 250),
        new CollectableObject('img/collectableobjects/coin.png', 800, 200),
        new CollectableObject('img/collectableobjects/coin.png', 900, 250),
        new CollectableObject('img/collectableobjects/coin.png', 1000, 350),
        new CollectableObject('img/collectableobjects/coin.png', 1300, 350),
        new CollectableObject('img/collectableobjects/coin.png', 1400, 350),
        new CollectableObject('img/collectableobjects/coin.png', 1500, 350),
    ],
    [
        new CollectableObject('img/collectableobjects/health.png', 1200, 250),
        new CollectableObject('img/collectableobjects/health.png', 2400, 250),
    ]
);
