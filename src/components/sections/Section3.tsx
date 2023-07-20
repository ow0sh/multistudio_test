import { FC, ReactNode } from 'react';
import Wrapper from '../Wrapper';
import Image from 'next/image';

const Section3 = () => {
  return (
    <section className="pt-[50px]" id="3">
      <Wrapper>
        <div className="flex flex-col">
          <Column left={false}>
            <h1 className="font-bold text-[26px]">
              Почему стоит принять участие?
            </h1>
            <h2 className="mt-4">
              Узнайте секреты этого таинственного напитка от ведущих
              бизнес-лидеров и наших экспертов по благополучию на рабочем месте:
            </h2>
            <ul className="list-disc pl-4 mt-4">
              <li>
                Секреты кумыса для начала и завершения дня с более высоким
                уровнем энергии
              </li>
              <li>Тайны кумыса для поддержания свежести и концентрации</li>
              <li>
                Советы и инструменты по управлению кумысом, чтобы избежать
                выгорания
              </li>
            </ul>
          </Column>
          <Column left={true}>
            <h1 className="font-bold text-[32px]">Приготовьтесь к кумысу!</h1>
            <h2 className="font-semibold text-[16px] mt-4">
              Присоединяйтесь к более чем 8000 людям, которые раскрыли его
              секреты поддержания бодрости весь день.
            </h2>
            <h3 className="pl-4 mt-4">
              Одна ведущая технологическая компания увеличила производительность
              на 75%.
            </h3>
            <h3 className="pl-4 mt-4">
              Топовое рекламное агентство увеличило прибыль на 100 000 долларов.
            </h3>
            <h3 className="mt-6">
              Мы готовы поделиться с вами всем: инструментами, советами и
              действиями для правильного потребления кумыса и получения
              максимальной пользы от него!
            </h3>
          </Column>
        </div>
      </Wrapper>
    </section>
  );
};

type Props = {
  children: ReactNode | undefined;
  left: boolean;
};

const Column: FC<Props> = ({ children, left }) => {
  if (!left) {
    return (
      <div className="flex justify-between px-10">
        <div className="flex flex-col order-1 w-[400px]">{children}</div>
        <div className="hidden md:flex order-2 w-[400px]">
          <Image src={'/woman.png'} width={400} height={450} alt="" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-between mt-10 px-10">
        <div className="flex flex-col order-2 w-[400px]">{children}</div>
        <div className="order-1 w-[400px] hidden md:flex">
          <Image src={'/man.png'} width={400} height={450} alt="" />
        </div>
      </div>
    );
  }
};

export default Section3;
