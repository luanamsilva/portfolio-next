'use client';
import React from 'react';
import Link from 'next/link';
import {
  Accordion,
  AccordionItem,
  Card,
  CardFooter,
  Image,
  Button,
} from '@nextui-org/react';

const Projects = () => {
  const contentBag = `Loja de bolsas online, com carrinho de compras e pagamento integrado.
   `;
   const contentPersonalized = `Portfólio de produtos personalizados para festas e ocasiões especiais.
   `;
   const contentMovies = `Projeto de filmes consumindo api, com a opção de adicionar na sua lista os seus favoritos.`
  return (
    <section className='flex flex-col justify-center items-center'>
      <div className="w-full md:w-3/4">
      <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-500 lg:text-4xl w-full py-9'>Projetos</h1>
        <div className='grid justify-center grid-cols-auto-fit gap-4 md:grid-cols-1fr md:gap-8 px-4 md:px-0 md:py-20 relative'>
        <Accordion selectionMode="multiple">
          <AccordionItem
          className='max-w-[500]'
            key="1"
            aria-label="Chung Miller"
            startContent={
              <Card isFooterBlurred radius="lg" className="border-none">
                <Image
                  alt="Bag"
                  className="object-cover"
                  height={400}
                  src="bag.jpeg"
                  width={400}
                />
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <Button
                    className="text-tiny text-white bg-black/20"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    <Link
                      href={'https://bags-app.vercel.app/'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Acessar
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            }
          >
            <div className='flex flex-col'>
              {contentBag}
              <div className='p-4 flex gap-4'>
                <p>Conheça o projeto acessando aqui. </p>
                <Button color="secondary" variant="bordered">
                  <Link
                    href={'https://bags-app.vercel.app/'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Acessar
                  </Link>
                </Button>
              </div>
              <div className='p-4 flex gap-4'>
                <p>Confira o repositório do projeto</p>
                <Button color="secondary" variant="bordered">
                  <Link
                    href={'https://github.com/luanamsilva/bags-app'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repositório
                  </Link>
                </Button>
              </div>
            </div>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Chung Miller"
            startContent={
              <Card isFooterBlurred radius="lg" className="border-none">
                <Image
                  alt="personalized"
                  className="object-cover"
                  height={400}
                  src="personalizados.png"
                  width={400}
                />
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <Button
                    className="text-tiny text-white bg-black/20"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    <Link
                      href={'https://personalizados.vercel.app/'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Acessar
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            }
          >
            <div className='flex flex-col'>
              {contentPersonalized}
              <div className='p-4 flex gap-4'>
                <p>Conheça o projeto acessando aqui. </p>
                <Button color="secondary" variant="bordered">
                  <Link
                    href={'https://personalizados.vercel.app/'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Acessar
                  </Link>
                </Button>
              </div>
              <div className='p-4 flex gap-4'>
                <p>Confira o repositório do projeto</p>
                <Button color="secondary" variant="bordered">
                  <Link
                    href={'https://github.com/luanamsilva/personalizados'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repositório
                  </Link>
                </Button>
              </div>
            </div>
          </AccordionItem>
          <AccordionItem
          className='max-w-[500]'
            key="3"
            aria-label="Chung Miller"
            startContent={
              <Card isFooterBlurred radius="lg" className="border-none">
                <Image
                  alt="Movies"
                  className="object-cover"
                  height={400}
                  src="filmes.png"
                  width={400}
                />
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <Button
                    className="text-tiny text-white bg-black/20"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    <Link
                      href={'https://movies-net-play.vercel.app/'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Acessar
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            }
          >
            <div className='flex flex-col'>
              {contentMovies}
              <div className='p-4 flex gap-4'>
                <p>Conheça o projeto acessando aqui. </p>
                <Button color="secondary" variant="bordered">
                  <Link
                    href={'https://movies-net-play.vercel.app/'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Acessar
                  </Link>
                </Button>
              </div>
              <div className='p-4 flex gap-4'>
                <p>Confira o repositório do projeto</p>
                <Button color="secondary" variant="bordered">
                  <Link
                    href={'https://github.com/luanamsilva/movies.net'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repositório
                  </Link>
                </Button>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
     </div> 
     </div>
    </section>
  );
};

export default Projects;
