function getSlidesToShow(currentWidth) {
  let responsiveKey = null;
  const responsive = getResponsive(currentWidth);
  Object.entries(responsive).map(([key, value]) => {
    if (value === true) responsiveKey = key;
  });
  return responsiveKey;
}

function getResponsive(currentWidth) {
  return {
    [2.5]: currentWidth > 768,
    [2]: currentWidth <= 768 && currentWidth >= 425,
    [1]: currentWidth <= 425,
  };
}
