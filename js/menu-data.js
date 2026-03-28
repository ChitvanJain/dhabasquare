/* ========================================
   DHABA SQUARE — Menu Data
   Replace prices with actual menu prices
   ======================================== */

const MENU_DATA = {
  starters: [
    { name: "Paneer Tikka", desc: "Charred cottage cheese marinated in smoky tandoori spices", price: "₹269", type: "veg", mustTry: false },
    { name: "Mushroom Galouti", desc: "Melt-in-mouth mushroom patties with Lucknowi spices", price: "₹249", type: "veg", mustTry: false },
    { name: "Hara Bhara Kebab", desc: "Spinach and green pea kebabs, crisp outside, soft within", price: "₹219", type: "veg", mustTry: false },
    { name: "Dahi Ke Kebab", desc: "Creamy hung curd patties with a golden crust", price: "₹229", type: "veg", mustTry: false },
    { name: "Afghani Chicken Tikka", desc: "Cream-laced, mildly spiced, charred to perfection on the tandoor", price: "₹329", type: "nonveg", mustTry: true },
    { name: "Chicken Malai Tikka", desc: "Tender chicken in a velvety cashew-cream marinade", price: "₹319", type: "nonveg", mustTry: false },
    { name: "Mutton Seekh Kebab", desc: "Hand-minced lamb on skewers, smoky and succulent", price: "₹349", type: "nonveg", mustTry: false },
    { name: "Tandoori Chicken (Half)", desc: "The classic — yogurt-marinated, fiery red, kiss of coal", price: "₹299", type: "nonveg", mustTry: false },
    { name: "Fish Amritsari", desc: "Crispy battered fish fillet, Amritsari street-style", price: "₹329", type: "nonveg", mustTry: false },
    { name: "Chicken 65", desc: "South-meets-North — fiery, tangy, irresistible", price: "₹279", type: "nonveg", mustTry: false },
  ],

  mains: [
    { name: "Dal Makhani", desc: "24-hour slow-cooked black lentils, rich with butter and cream", price: "₹249", type: "veg", mustTry: false },
    { name: "Paneer Butter Masala", desc: "Cottage cheese in a silky tomato-butter gravy", price: "₹269", type: "veg", mustTry: false },
    { name: "Palak Paneer", desc: "Fresh spinach and paneer, the Punjabi way", price: "₹249", type: "veg", mustTry: false },
    { name: "Kadhai Paneer", desc: "Wok-tossed paneer with capsicum and freshly ground spices", price: "₹259", type: "veg", mustTry: false },
    { name: "Malai Kofta", desc: "Soft paneer-potato dumplings in a creamy cashew gravy", price: "₹269", type: "veg", mustTry: false },
    { name: "Chicken Patiala", desc: "Rich, creamy, and royal — Patiala's pride on your plate", price: "₹329", type: "nonveg", mustTry: true },
    { name: "Butter Chicken", desc: "The king of curries — smoky tandoori chicken in tomato-butter silk", price: "₹319", type: "nonveg", mustTry: false },
    { name: "Mutton Rogan Josh", desc: "Slow-braised lamb in aromatic Kashmiri spices", price: "₹389", type: "nonveg", mustTry: false },
    { name: "Chicken Handi", desc: "Clay-pot chicken curry, simmered till the flavours meld", price: "₹309", type: "nonveg", mustTry: false },
    { name: "Egg Curry", desc: "Desi-style egg masala, wholesome and comforting", price: "₹199", type: "nonveg", mustTry: false },
    { name: "Keema Matar", desc: "Minced lamb with green peas — the ultimate desi comfort food", price: "₹339", type: "nonveg", mustTry: false },
  ],

  breads: [
    { name: "Tandoori Roti", desc: "Whole wheat bread from the clay oven", price: "₹39", type: "veg", mustTry: false },
    { name: "Butter Naan", desc: "Soft, pillowy, brushed with desi ghee", price: "₹59", type: "veg", mustTry: false },
    { name: "Garlic Naan", desc: "Loaded with minced garlic and coriander", price: "₹69", type: "veg", mustTry: false },
    { name: "Lachha Paratha", desc: "Flaky, layered, and irresistibly buttery", price: "₹59", type: "veg", mustTry: false },
    { name: "Missi Roti", desc: "Gram flour flatbread with desi spices", price: "₹49", type: "veg", mustTry: false },
    { name: "Jeera Rice", desc: "Fragrant basmati tempered with cumin", price: "₹159", type: "veg", mustTry: false },
    { name: "Steamed Rice", desc: "Simple, fluffy basmati rice", price: "₹129", type: "veg", mustTry: false },
  ],

  champaran: [
    { name: "Champaran Special Mutton", desc: "Sealed & slow-cooked in a clay pot — the ancient Bihar method, no water, pure flavour", price: "₹499", type: "nonveg", mustTry: true },
    { name: "Champaran Chicken", desc: "The same legendary technique, with tender chicken pieces", price: "₹399", type: "nonveg", mustTry: false },
    { name: "Champaran Mutton (Boneless)", desc: "All the smoky, sealed-pot magic — boneless for easy eating", price: "₹549", type: "nonveg", mustTry: false },
    { name: "Champaran Egg Curry", desc: "Eggs slow-cooked the Champaran way — rich, rustic, and different", price: "₹299", type: "nonveg", mustTry: false },
  ],

  biryani: [
    { name: "Chicken Dum Biryani", desc: "Slow-cooked, layered, fragrant — the way biryani should be", price: "₹299", type: "nonveg", mustTry: false },
    { name: "Mutton Dum Biryani", desc: "Tender lamb pieces in long-grain rice, sealed with dough", price: "₹369", type: "nonveg", mustTry: false },
    { name: "Veg Biryani", desc: "Seasonal vegetables, aromatic spices, and saffron-kissed rice", price: "₹229", type: "veg", mustTry: false },
    { name: "Egg Biryani", desc: "Flavourful egg dum biryani with whole spices", price: "₹249", type: "nonveg", mustTry: false },
    { name: "Chicken Noodles", desc: "Indo-Chinese style hakka noodles with chicken", price: "₹219", type: "nonveg", mustTry: false },
    { name: "Veg Noodles", desc: "Stir-fried hakka noodles loaded with vegetables", price: "₹189", type: "veg", mustTry: false },
  ],

  desserts: [
    { name: "Gulab Jamun", desc: "Hot, syrup-soaked, melt-in-mouth — 2 pieces", price: "₹99", type: "veg", mustTry: false },
    { name: "Rasmalai", desc: "Soft paneer discs in chilled, cardamom-infused milk", price: "₹119", type: "veg", mustTry: false },
    { name: "Kulfi Falooda", desc: "Traditional malai kulfi with rose falooda noodles", price: "₹139", type: "veg", mustTry: false },
    { name: "Phirni", desc: "Slow-set rice pudding, served chilled in clay pots", price: "₹109", type: "veg", mustTry: false },
    { name: "Masala Chaas", desc: "Spiced buttermilk — the ultimate desi cooler", price: "₹69", type: "veg", mustTry: false },
    { name: "Mango Lassi", desc: "Thick, creamy, and sweet — seasonal favourite", price: "₹99", type: "veg", mustTry: false },
    { name: "Sweet Lassi", desc: "Classic Punjabi lassi, thick and frothy", price: "₹79", type: "veg", mustTry: false },
    { name: "Masala Chai", desc: "Strong, aromatic, made with fresh ginger and cardamom", price: "₹49", type: "veg", mustTry: false },
  ]
};
