import Image from 'next/image';
import Wrapper from '../Wrapper';

const Section2 = () => {
  return (
    <section className="bg-default-green text-sm md:text-md" id="2">
      <Wrapper>
        <div className="flex flex-col justify-between">
          <Image
            width={70}
            height={50}
            alt=""
            src={'/cumislogo.png'}
            className="mx-auto mt-[50px] mb-[30px]"
          />
          <h3 className="text-center font-roboto text-md md:text-xl w-[300px] md:w-[700px] mx-auto my-[25px]">
            Трудно сохранять бодрость и находиться в состоянии бодрствования на
            работе? Представьте, что вы можете достичь с естественным и
            продолжительным зарядом энергии.
          </h3>
          <h1 className="text-center font-roboto text-[18px] md:text-[25px] font-bold mx-auto">
            Каждый день, весь день
          </h1>
          <h3 className="text-center font-roboto text-md md:text-xl w-[300px] md:w-[700px] mx-auto my-[25px]">
            Если вы устали бороться с утомлением и полагаться на кофеин, чтобы
            поддерживать себя в тонусе, вы не захотите упустить это прорывное
            бесплатное веб-мероприятие.
          </h3>
          <Image
            width={70}
            height={50}
            alt=""
            src={'/cumislogo.png'}
            className="mx-auto mb-[50px] mt-[30px]"
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default Section2;
