const GetItemRarity = (rarityValue) => {
  var itemRarity;
  var itemRarityColor;

  switch (rarityValue) {
    case "common":
      itemRarity = "COMUM";
      itemRarityColor = "#40464d";
      break;
    case "uncommon":
      itemRarity = "INCOMUM";
      itemRarityColor = "#00aa4c";
      break;
    case "rare":
      itemRarity = "RARO";
      itemRarityColor = "#008ec1";
      break;
    case "epic":
      itemRarity = "EPICO";
      itemRarityColor = "#ac00e6";
      break;
    case "legendary":
      itemRarity = "LENDARIO";
      itemRarityColor = "#de6e0e";
      break;
    case "mythic":
      itemRarity = "MITICO";
      itemRarityColor = "#c5a344";
      break;
    case "exotic":
      itemRarity = "EXOTICO";
      itemRarityColor = "#23eec4";
      break;
    case "marvel":
      itemRarity = "MARVEL";
      itemRarityColor = "#ea3537";
    default:
      break;
  }

  return {
    rarity: itemRarity,
    color: itemRarityColor,
  };
};

export default GetItemRarity;
