const makeXML = async (xmlText: string) => {
  const blob = new Blob([xmlText], { type: 'application/xml' });
  const file = new File([blob], 'output.xml', { type: 'application/xml' });

  return file;
};
