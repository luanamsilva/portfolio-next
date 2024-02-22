import React from 'react';

const Education = () => {
  return (
<section className="flex flex-col justify-center items-center pb-6 mb-6">
  <div className="w-full md:w-3/4 mx-auto text-center">
    <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-500 lg:text-4xl w-full pb-8 mt-12">
      Formação
    </h1>
    <div className="p-3 max-w-xl mx-auto text-justify">
      <h2 className="text-lg pb-2">- Ciência da Computação: 2022-2025</h2>
      <p className="text-gray-700">
        UNIVERSIA - Centro Universitário União das Américas Descomplica
      </p>
    </div>
    <div className="p-2 max-w-xl mx-auto text-justify">
      <h2 className="text-lg pb-2">- Bacharelado em Administração: 2005 – 2009</h2>
      <p className="text-gray-700">
        PUC MINAS – Pontifícia Universidade Católica de Minas Gerais
      </p>
    </div>
  </div>
</section>

  );
};

export default Education;
