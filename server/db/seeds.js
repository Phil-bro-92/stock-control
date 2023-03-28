use stock_control;
db.dropDatabase();

db.users.insertMany([
  {
    username: "philbro",
    password: "mockup",
  },
]);

db.produce.insertMany([
  {
    product: "Bananas",
    price: {
      standard: 0.89,
      offer: 0.59,
    },
    origin: "Columbia",
    quantity: 130,
    stock_level: "High",
    picture:
      "https://media.istockphoto.com/id/174959827/photo/banana.jpg?s=612x612&w=0&k=20&c=rx4zQuWlGafwqqIjF_z4wEGh0BzSxiZcMxFjtwFxUXU=",
  },
  {
    product: "Apples",
    price: {
      standard: 0.99,
      offer: 0.79,
    },
    origin: "Peru",
    quantity: 34,
    stock_level: "Medium",
    picture:
      "https://media.istockphoto.com/id/133616480/photo/harvest.jpg?s=612x612&w=0&k=20&c=N74B06XcTPT7PtetlTXmqJ4bVxq4GAWUBm3OmfXGLjA=",
  },
  {
    product: "Grapes",
    price: {
      standard: 1.89,
      offer: 1.59,
    },
    origin: "France",
    quantity: 23,
    stock_level: "Medium",
    picture:
      "https://media.istockphoto.com/id/172304886/photo/bunch-of-green-grapes-laying.jpg?s=612x612&w=0&k=20&c=WOCfia6i2586m6NoqhU10CycAXBbGDOXnf7tjjJwnD4=",
  },
  {
    product: "Pears",
    price: {
      standard: 1.49,
      offer: 1.19,
    },
    origin: "Belgium",
    quantity: 10,
    stock_level: "Low",
    picture:
      "https://media.istockphoto.com/id/860661492/photo/pears.jpg?s=612x612&w=0&k=20&c=JjAQ8_Jx31QB34mQj6CA1qBXh92myEZvd4VLKs-L7kM=",
  },
  {
    product: "Carrot",
    price: {
      standard: 1.29,
      offer: 1.09,
    },
    origin: "England",
    quantity: 46,
    stock_level: "Medium",
    picture:
      "https://media.istockphoto.com/id/171322558/photo/garden-carrots.jpg?s=612x612&w=0&k=20&c=tqt5CPpdmw3vREI5ZOK7Zc-q5V9rjMRpuOcH_gMzW2M=",
  },
  {
    product: "Blueberries",
    price: {
      standard: 2.79,
      offer: 2.59,
    },
    origin: "Scotland",
    quantity: 67,
    stock_level: "High",
    picture:
      "https://media.istockphoto.com/id/1248120812/photo/fresh-blueberries-isolated-on-white-background-top-vew.jpg?s=612x612&w=0&k=20&c=VFj38JLsWqRLncS_qH1Bpeb8aqqLk1XC2yV3vYoNJeM=",
  },
  {
    product: "Broccoli",
    price: {
      standard: 0.79,
      offer: 0.59,
    },
    origin: "Ireland",
    quantity: 37,
    stock_level: "Medium",
    picture:
      "https://media.istockphoto.com/id/183300149/photo/broccoli.jpg?s=612x612&w=0&k=20&c=ryP5FrMKK8ejTMX04iMUVpOTyfL_Sgb2fYmeQzKQeng=",
  },
]);

db.bakery.insertMany([
  {
    product: "Tiger Bread",
    price: {
      standard: 1.19,
      offer: 0.79,
    },
    quantity: 29,
    stock_level: "Medium",
    picture:
      "https://media.istockphoto.com/id/1389711826/photo/fresh-crispy-tiger-bread-with-a-delicious-beautiful-crust-and-wonderful-homemade-taste-on-a.jpg?s=612x612&w=0&k=20&c=HZwmWTgik0NHke2PkVsFTRm7JEJEyIHvVbDf0YlFpQc=",
  },
  {
    product: "Wholemeal Bread",
    price: {
      standard: 0.89,
      offer: 0.79,
    },
    quantity: 19,
    stock_level: "Low",
    picture:
      "https://media.istockphoto.com/id/1223423223/photo/wholegrain-and-seeds-sliced-bread.jpg?s=612x612&w=0&k=20&c=dcizWtLpc2BcqreZH5ahNcKDl1rCdOZCYwF8tq8oIwA=",
  },
  {
    product: "Pancakes",
    price: {
      standard: 1.49,
      offer: 0.99,
    },
    quantity: 17,
    stock_level: "Low",
    picture:
      "https://media.istockphoto.com/id/1369087127/photo/homemade-yeast-pancakes.jpg?s=612x612&w=0&k=20&c=zgceCpaCZ_CkhoDSuyWsWFoia1P8X6DskjdJTniMwrI=",
  },
]);
db.dairy.insertMany([
  {
    product: "Full Milk",
    price: {
      standard: 1.39,
      offer: 1.19,
    },
    size: "4 pints",
    quantity: 30,
    stock_level: "Medium",
    picture:
      "https://media.istockphoto.com/id/156761930/photo/pint-milk-containers-arranged-in-rows.jpg?s=612x612&w=0&k=20&c=TmGN4sD-Z00IeY2mc94sJeUBz5Z1TWZ1lcvcN1HTHS8=",
  },
  {
    product: "Full Milk",
    price: {
      standard: 0.99,
      offer: 0.79,
    },
    size: "2 pints",
    quantity: 40,
    stock_level: "Medium",
    picture:
      "https://media.istockphoto.com/id/156761930/photo/pint-milk-containers-arranged-in-rows.jpg?s=612x612&w=0&k=20&c=TmGN4sD-Z00IeY2mc94sJeUBz5Z1TWZ1lcvcN1HTHS8=",
  },
  {
    product: "Full Milk",
    price: {
      standard: 0.69,
      offer: 0.49,
    },
    size: "1 pint",
    quantity: 80,
    stock_level: "High",
    picture:
      "https://media.istockphoto.com/id/156761930/photo/pint-milk-containers-arranged-in-rows.jpg?s=612x612&w=0&k=20&c=TmGN4sD-Z00IeY2mc94sJeUBz5Z1TWZ1lcvcN1HTHS8=",
  },
  {
    product: "Semi-skimmed Milk",
    price: {
      standard: 1.29,
      offer: 1.09,
    },
    size: "4 pints",
    quantity: 50,
    stock_level: "High",
    picture:
      "https://media.istockphoto.com/id/119213971/photo/four-pints-milk.jpg?s=612x612&w=0&k=20&c=bvM0G-h3xDleDrQ3dXgm4RG_e1jFoxWomVsqr-aKOcY=",
  },
  {
    product: "Semi-skimmed Milk",
    price: {
      standard: 0.89,
      offer: 0.79,
    },
    size: "2 pints",
    quantity: 40,
    stock_level: "Medium",
    picture:
      "https://media.istockphoto.com/id/119213971/photo/four-pints-milk.jpg?s=612x612&w=0&k=20&c=bvM0G-h3xDleDrQ3dXgm4RG_e1jFoxWomVsqr-aKOcY=",
  },
  {
    product: "Semi-skimmed Milk",
    price: {
      standard: 0.59,
      offer: 0.49,
    },
    size: "1 pint",
    quantity: 60,
    stock_level: "High",
    picture:
      "https://media.istockphoto.com/id/119213971/photo/four-pints-milk.jpg?s=612x612&w=0&k=20&c=bvM0G-h3xDleDrQ3dXgm4RG_e1jFoxWomVsqr-aKOcY=",
  },
  {
    product: "Skimmed Milk",
    price: {
      standard: 1.19,
      offer: 0.99,
    },
    size: "4 pints",
    quantity: 30,
    stock_level: "Medium",
    picture:
      "https://media.istockphoto.com/id/496264456/photo/milk-bottles-in-fridge-door.jpg?s=612x612&w=0&k=20&c=M__vrXOoAJ0_W2M_bLP-eI58O1qF4_yQQD74QWjZU70=",
  },
  {
    product: "Skimmed Milk",
    price: {
      standard: 0.99,
      offer: 0.79,
    },
    size: "2 pints",
    quantity: 40,
    stock_level: "Medium",
    picture:
      "https://media.istockphoto.com/id/496264456/photo/milk-bottles-in-fridge-door.jpg?s=612x612&w=0&k=20&c=M__vrXOoAJ0_W2M_bLP-eI58O1qF4_yQQD74QWjZU70=",
  },
  {
    product: "Skimmed Milk",
    price: {
      standard: 0.69,
      offer: 0.49,
    },
    size: "1 pint",
    quantity: 80,
    stock_level: "High",
    picture:
      "https://media.istockphoto.com/id/496264456/photo/milk-bottles-in-fridge-door.jpg?s=612x612&w=0&k=20&c=M__vrXOoAJ0_W2M_bLP-eI58O1qF4_yQQD74QWjZU70=",
  },
  {
    product: "Cheddar Cheese",
    price: {
      standard: 1.99,
      offer: 1.49,
    },
    quantity: 10,
    stock_level: "Low",
    picture:
      "https://media.istockphoto.com/id/1414625565/photo/cheddar-cheese-sliced-on-black-plate-on-dark-table.jpg?s=612x612&w=0&k=20&c=FKJA5NzNob9zO65sAYDgcSwHoUthp_pQAmCexeRRrXM=",
  },
  {
    product: "Yoghurt",
    price: {
      standard: 0.99,
      offer: 0.89,
    },
    quantity: 57,
    stock_level: "High",
    picture:
      "https://media.istockphoto.com/id/1356448333/photo/plastic-cup-with-sour-cream-3d-render.jpg?s=612x612&w=0&k=20&c=nGDccMiGckLEIxKXADOSADrwJb8c0m3YksCKKtFt_PI=",
  },
]);
db.meats.insertMany([
  {
    product: "Breaded Chicken",
    price: {
      standard: 4.99,
      offer: 3.99,
    },
    quantity: 34,
    stock_level: "Medium",
    picture:
      "https://media.istockphoto.com/id/481768548/photo/homemade-breaded-chicken-tenders.jpg?s=612x612&w=0&k=20&c=7S8p9gte9TZnuB8bxgUCHpzH7VYHHaHOM1WsWsOAZSs=",
  },
  {
    product: "Pork Sausages ",
    price: {
      standard: 2.99,
      offer: 1.99,
    },
    quantity: 64,
    stock_level: "High",
    picture:
      "https://media.istockphoto.com/id/154934547/photo/sausages.jpg?s=612x612&w=0&k=20&c=bjhzwGiHmzB1lGYw-FUma8uf38x_uvpviow01eHWRGc=",
  },
  {
    product: "Beef Steak",
    price: {
      standard: 4.99,
      offer: 3.99,
    },
    quantity: 44,
    stock_level: "Medium",
    picture:
      "https://media.istockphoto.com/id/923692030/photo/variety-of-raw-black-angus-prime-meat-steaks.jpg?s=612x612&w=0&k=20&c=QWs-aEHfLMF74kWVHt5srGB-1noX-st5I3Ntg-kAJ9s=",
  },
  {
    product: "Lamb Steak",
    price: {
      standard: 4.5,
      offer: 3.99,
    },
    quantity: 34,
    stock_level: "Medium",
    picture:
      "https://media.istockphoto.com/id/1166248187/photo/venison-elk-sirloin-tip-roast.jpg?s=612x612&w=0&k=20&c=1UaWZE9MD2x8pRNmZj8TdB1nzZVesc3_VoUa45kSXuY=",
  },
]);
db.grocery.insertMany([
  {
    product: "Irn Bru",
    price: {
      standard: 1.99,
      offer: 1.45,
    },
    quantity: 84,
    stock_level: "High",
    picture:
      "https://media.istockphoto.com/id/458255399/photo/irn-bru-can.jpg?s=612x612&w=0&k=20&c=SUKWk4evf3DaEdQycuYKizfE0ra3Ah_qEPFwm6Anecw=",
  },
  {
    product: "Coca Cola",
    price: {
      standard: 2.19,
      offer: 1.75,
    },
    quantity: 44,
    stock_level: "Medium",
    picture:
      "https://media.istockphoto.com/id/458464735/photo/coke.jpg?s=612x612&w=0&k=20&c=YbmiazMmY0DkWh_W8T0pBkOgai2k62hGF1TJn9EC5W0=",
  },
  {
    product: "Tomato Soup",
    price: {
      standard: 1.09,
      offer: 0.85,
    },
    quantity: 13,
    stock_level: "Low",
    picture:
      "https://media.istockphoto.com/id/1144753330/photo/tomato-soup.jpg?s=612x612&w=0&k=20&c=WfRCt69MVQHGEllk5JAh34U7W4W-uZFBC1rCZuDpJfA=",
  },
  {
    product: "Chicken Soup",
    price: {
      standard: 1.19,
      offer: 0.95,
    },
    quantity: 23,
    stock_level: "Medium",
    picture:
      "https://media.istockphoto.com/id/1419346626/photo/avgolemono-traditional-greek-chicken-soup-with-rice-lemon-and-eggs.jpg?s=612x612&w=0&k=20&c=NseEK_FQqtxaTSmDTMBmE5WKA1kyoKa7aHl-pzwlrxk=",
  },
]);
db.alcohol.insertMany([
  {
    product: "Red Wine",
    price: {
      standard: 5.19,
      offer: 4.65,
    },
    quantity: 33,
    stock_level: "Medium",
    picture:
      "https://media.istockphoto.com/id/1089479678/photo/red-wine-bottle-and-wineglass-shot-on-white-background.jpg?s=612x612&w=0&k=20&c=ThkySsZDqW_Fn3gd3SZ0u8pz_ortL_heIu07wsIu7pg=",
  },
  {
    product: "White Wine",
    price: {
      standard: 4.79,
      offer: 4.45,
    },
    quantity: 63,
    stock_level: "High",
    picture:
      "https://media.istockphoto.com/id/1346006498/photo/glass-bottle-with-wine.jpg?s=612x612&w=0&k=20&c=QJWDvCZEDuyQZWQKjXhdnSZAPDx-j6BrWhd5ItKmv4w=",
  },
  {
    product: "Rose Wine",
    price: {
      standard: 3.79,
      offer: 3.45,
    },
    quantity: 13,
    stock_level: "Low",
    picture:
      "https://media.istockphoto.com/id/1370944218/photo/bottle-of-rose-wine-isolated-on-white-background-with-reflection.jpg?s=612x612&w=0&k=20&c=PUxRkw0LB1gyCHf5wWxEbefHV_X_p3Elt5eiytokpLo=",
  },
  {
    product: "Budweiser 6pk",
    price: {
      standard: 5.79,
      offer: 5.45,
    },
    quantity: 45,
    stock_level: "Medium",
    picture:
      "https://media.istockphoto.com/id/458416053/photo/ice-cold-bottle-of-budweiser-beer.jpg?s=612x612&w=0&k=20&c=eTI-l1kw32NhFmZ-A9H-ScOb3D71BNoEd29ssFGR_iU=",
  },
]);
