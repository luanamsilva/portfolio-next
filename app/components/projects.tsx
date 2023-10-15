'use client';
import React from 'react';
import Link from 'next/link';
import {
  Accordion,
  AccordionItem,
  Avatar,
  Card,
  CardFooter,
  Image,
  Button,
} from '@nextui-org/react';

const Projects = () => {
  const contentBag = `Loja de bolsas online, com carrinho de compras e pagamento integrado.
   `;

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="w-full md:w-3/4">
        <h1>Projetos</h1>
        <Accordion selectionMode="multiple">
          <AccordionItem
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
                    href={'https://bags-app.vercel.app/'}
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
    </section>
  );
};

export default Projects;
