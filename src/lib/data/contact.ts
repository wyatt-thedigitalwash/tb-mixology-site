export const serviceOptions = [
  "Bartending Service",
  "Glassware Rental",
  "Batch Cocktails",
  "Cocktail Classes",
  "Caviar Service",
  "Not Sure Yet",
];

export const cupOptions = ["Plastic Cups", "Glassware Rental", "Not sure yet"];

/** Maps URL ?service= values to checkbox labels */
export const serviceParamMap: Record<string, string> = {
  bartending: "Bartending Service",
  glassware: "Glassware Rental",
  batch: "Batch Cocktails",
  classes: "Cocktail Classes",
  caviar: "Caviar Service",
};
