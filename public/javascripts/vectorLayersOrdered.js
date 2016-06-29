var annetLayers=[
  "railway",
  "n50-lysloeype",
  "countour-index",
  "Bygning",
  "Myr",
  "countour",

];

var annetGroups[
  "FKB_Bygning",
  "FKB_Veger",
  "veger",
  "ABAS_Grenser",
];

var bygninglayers = [
  "fill-FKB_Bygning_1-Skygge",
  "fill-FKB_Bygning_2-Skygge",
  "fill-FKB_Bygning_3-Skygge",
  "fill-FKBBSK_Skygge_Bygg-1",
  "fill-FKBBSK_Skygge_Bygg-2",
  "fill-FKB_Tribune",
  "fill-FKB_Bygning_1",
  "fill-FKB_Bygning_2",
  "fill-FKB_Bygning_3",
  "fill-FKB_Taarn-flate",
  "fill-FKB_AnnenBygning_1",
  "fill-FKB_AnnenBygning_2",
  "fill-FKB_AnnenBygning_3",
  "fill-FKB_Takoverbygg_1",
  "fill-FKB_Takoverbygg_2",
  "fill-FKB_Takoverbygg_3",
  "fill-FKBBSK_Takflate_omriss-Lysvinkel_3d_1",
  "fill-FKBBSK_Takflate_omriss-Lysvinkel_3d_1-2",
  "fill-FKBBSK_Takflate_omriss-Lysvinkel_3d_2",
  "fill-FKBBSK_Takflate_omriss-Lysvinkel_3d_2-2",
  "fill-FKBBSK_Takflate_omriss-Lysvinkel_3d_3",
  "fill-FKBBSK_Takflate_omriss-Lysvinkel_3d_3-2",
  "fill-FKBBSK_Takflate_omriss-Lysvinkel_3d_4",
  "fill-FKBBSK_Takflate_omriss-Lysvinkel_3d_4-2",
  "line-FKB_AnnenBygning_1",
  "line-FKB_AnnenBygning_2",
  "line-FKB_AnnenBygning_3",
  "line-FKB_TrappBygg_1",
  "line-FKB_TrappBygg_2",
  "line-FKB_Bygning_1",
  "line-FKB_Bygning_2",
  "line-FKB_Bygning_3",
  "line-FKB_Bygning_3",
  "line-FKB_TribuneKant",
  "line-FKB_Veranda_1",
  "line-FKB_Veranda_2",
  "line-FKB_BygningBru_1",
  "line-FKB_BygningBru_2",
  "line-FKB_Bygningsdelelinje",
  "line-FKB_Taksprang_1",
  "line-FKB_Taksprang_2",
  "line-FKB_TaarnKant",
  "line-FKB_Takplataa_1",
  "line-FKB_Takplataa_2",
  "line-FKB_TakplataaTopp_1",
  "line-FKB_TakplataaTopp_2",
  "line-FKB_Takkant_1",
  "line-FKB_Takkant_2",
  "line-FKB_Takkant_3",
  "line-FKBBSK_Takflate_flate_1",
  "line-FKBBSK_Takflate_flate_2",
  "line-FKB_TakoverbyggKant_1",
  "line-FKB_TakoverbyggKant_2",
  "line-FKB_TakoverbyggKant_3",
  "line-FKB_Bygningslinje_1",
  "line-FKB_Bygningslinje_2",
  "line-FKB_Moenelinje_1",
  "line-FKB_Moenelinje_2"
];
var bygninglayersBykart =[
  "line-FKB_Bygning_3",
  "fill-FKB_Bygning_3",
  "fill-FKB_Bygning_3-Skygge",
  "line-FKB_Bygning_2",
  "fill-FKB_Bygning_2",
  "fill-FKB_Bygning_2-Skygge"
];
var adresselayers = ["symbol-WAM_Adresse_1"];

var navnlayers = [
  "symbol-FKB_PresAnnenTekst_Punkt",
  "symbol-FKB_PresAnnenTekst_Linje",
  "symbol-FKB_PresStedsnavn_Terrengdetalj",
  "symbol-FKB_PresStedsnavn_Kyst_StorSkrift",
  "symbol-FKB_PresStedsnavn_Terrengform_StorSkrift",
  "symbol-FKB_PresStedsnavn_Terrengform_LitenSkrift",
  "symbol-FKB_PresStedsnavn_Terrengform_Hoyre",
  "symbol-FKB_PresStedsnavn_Kyst_LitenSkrift",
  "symbol-FKB_PresStedsnavn_Vann_StorSkrift",
  "symbol-FKB_PresStedsnavn_Vann_LitenSkrift",
  "symbol-FKB_PresStedsnavn_Vann-LandObj_Hoyre",
  "symbol-FKB_PresStedsnavn_Grustak",
  "symbol-FKB_PresStedsnavn_Myrer",
  "symbol-FKB_PresStedsnavn_Bebyggelse_StorSkrift",
  "symbol-FKB_PresStedsnavn_Bebyggelse_MiddelsSkrift",
  "symbol-FKB_PresStedsnavn_Bebyggelse_LitenSkrift",
  "symbol-FKB_PresStedsnavn_Garder",
  "symbol-FKB_PresStedsnavn_HusHytteSeter",
  "symbol-FKB_PresStedsnavn_BergverkIndustri",
  "symbol-FKB_PresStedsnavn_Samferdsel",
  "symbol-FKB_PresStedsnavn_AndreAdmOmr",
  "symbol-FKB_PresStedsnavn_Andre"
];

var hoydelayers = [
  // "line-FKB_Hoeydekurve_1",
  "line-FKB_Hoeydekurve_2",
  "symbol-FKB_PresHoydetallVann",
  "symbol-FKB_PresHoydetallPunkt_7501",
  "symbol-FKB_PresHoydetallPunkt_3601",
  "symbol-FKB_PresHoydetallPunkt_1801"
];


var symbolGroups=[
  "Vegskilt",
  "Tekst_Vann",
  "OSM_Labels",
  //"Skrivemaate_N1000-N500",
  "Skrivemaate_N5000",
  "Skrivemaate_N1000-N500",
  "countour-index-label",
  "OpenStreetMap"
];
var symbolLayers=[
  "rail-station-label",
  "contour-index-label",
  "admin-3-4-boundaries",
  "admin-2-boundaries",
];
