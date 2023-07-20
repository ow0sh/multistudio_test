'use client';
import Wrapper from '../Wrapper';
import Image from 'next/image';

const Section1 = () => {
  function clickHandler() {
    const el = document.getElementById('form');
    el?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="bg-default-gray text-white px-1" id="1">
      <Wrapper>
        <div className="flex flex-col">
          <h2 className="mt-[50px] flex flex-col text-center justify-center font-roboto">
            <span className="text-lg">Мы работаем</span>
            <span className="text-[16px]">Продуктивно</span>
          </h2>
          <h1 className="text-[38px] mt-[50px] text-center mx-auto">
            <span className="text-green-500">Кумыс</span> – секрет энергии на
            работе: советы для поддержания тонуса весь день, каждый день!
          </h1>
          <h2 className="text-center mx-auto w-[400px] mt-[25px]">
            Живой тренинг: узнай про все секреты кумыса от лучших
            гастроентерологов России
          </h2>
          <button
            onClick={clickHandler}
            className="mt-[50px] hover:bg-green-300 bg-green-500 text-black w-[250px] h-[50px] mx-auto py-auto rounded-full font-bold"
          >
            ЗАПИШИТЕ МЕНЯ!
          </button>
          <Image
            className="mx-auto"
            width={400}
            height={300}
            alt=""
            src="/cumis.png"
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default Section1;
