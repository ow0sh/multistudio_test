'use client';
import Wrapper from './Wrapper';

const Header = () => {
  function clickHandler(id: string) {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <header className="text-[12px] md:text-md bg-default-gray-darker text-white">
      <Wrapper>
        <div className="flex justify-between py-2 px-2">
          <h1 className="font-roboto font-medium md:w-[130px]">
            Мы работаем
            <br /> Продуктивно
          </h1>
          <section className="flex justify-between md:w-[300px] font-sans">
            <h2
              onClick={() => clickHandler('3')}
              className="border-b-2 border-green-700 hover:pb-3 px-1 my-auto"
            >
              Про нас
            </h2>
            <h2
              className="border-b-2 border-green-700 hover:pb-3 px-1 my-auto"
              onClick={() => clickHandler('4')}
            >
              Отзывы
            </h2>
            <h2
              onClick={() => clickHandler('form')}
              className="border-b-2 border-green-700 hover:pb-3 px-1 my-auto"
            >
              Записаться
            </h2>
          </section>
          <button
            onClick={() => clickHandler('form')}
            className="text-sm md:text-md md:w-[130px] font-bold border-2 border-white rounded-full px-1 md:px-4 hover:text-green-500 hover:border-green-500"
          >
            Записаться
          </button>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
