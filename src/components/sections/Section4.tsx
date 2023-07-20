import { FC } from 'react';
import Wrapper from '../Wrapper';
import Image from 'next/image';

const Section4 = () => {
  return (
    <section className="mt-10 bg-gray-100 py-[50px]" id={'4'}>
      <Wrapper>
        <div className="flex flex-col">
          <h1 className="text-[30px] font-bold mx-auto">
            Но не ограничивайтесь только нашими словами
          </h1>
          <Comment
            text="После кумыса наша руководящая команда внедрила предложенные шаги и заметила сокращение пропусков на 54% и увеличение производительности на 68%."
            srcimg="/maria.png"
            human="Мария Берёзова, HR manager"
          />
          <Comment
            text="Получение доступа к ведущим бизнес-лидерам и экспертам по благополучию – это бесценно. Наш персонал говорит, что они чувствуют себя счастливее, здоровее и более энергичными на работе. Это всё благодаря кумысу!"
            srcimg="/ivan.png"
            human="Иван Дубов, CEO"
          />
        </div>
      </Wrapper>
    </section>
  );
};

interface Props {
  text: string;
  srcimg: string;
  human: string;
}

const Comment: FC<Props> = ({ text, srcimg, human }) => {
  return (
    <div className="flex flex-col mx-auto mt-[30px]">
      <h1 className="text-[18px] w-[500px]">
        <span className="text-xl text-green-500">”</span>
        {text}
      </h1>
      <div className="flex mt-4">
        <Image src={srcimg} width={40} height={40} alt="" />
        <span className="my-auto ml-2">{human}</span>
      </div>
    </div>
  );
};

export default Section4;
