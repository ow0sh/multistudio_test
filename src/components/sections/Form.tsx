'use client';
import { ChangeEvent, FC, useState } from 'react';
import Wrapper from '../Wrapper';

interface Field {
  value: string;
  isValidated: boolean;
}

const Form = () => {
  const [name, setName] = useState<Field>({ value: '', isValidated: true });

  const [mail, setMail] = useState<Field>({ value: '', isValidated: true });

  function nameHandler(e: ChangeEvent<HTMLInputElement>) {
    let isVal = false;
    if (e.target.value) isVal = true;
    setName({ value: e.target.value, isValidated: isVal });
  }
  function mailHandler(e: ChangeEvent<HTMLInputElement>) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setMail({
      value: e.target.value,
      isValidated: emailPattern.test(e.target.value),
    });
  }
  function clickHandler() {
    console.log(`Mail: ${mail.value}, Name: ${name.value}`);
  }

  return (
    <section
      className="bg-default-gray text-white pt-[50px] pb-[50px]"
      id="form"
    >
      <Wrapper>
        <div>
          <h1 className="font-bold text-[32px] flex flex-col text-center mx-auto mb-[30px]">
            <span>Не упусти свой шанс</span>
            <span className="text-green-500">Только 50 мест!</span>
          </h1>
          <div className="flex flex-col w-[480px] h-[500px] border-2 border-green-500 mx-auto p-10">
            <h1 className="text-[26px] text-center mb-[100px]">
              Мы работаем продуктивно
            </h1>
            <Input
              hint="Ваше имя *"
              value={name.value}
              handler={nameHandler}
              isValidated={name.isValidated}
            />
            <Input
              hint="Ваша почта *"
              value={mail.value}
              handler={mailHandler}
              isValidated={mail.isValidated}
            />
            {name.value &&
            mail.value &&
            mail.isValidated &&
            name.isValidated ? (
              <button
                onClick={clickHandler}
                className="mx-auto mt-[40px] w-[220px] h-[50px] bg-green-500 hover:bg-green-300 rounded-full text-black font-bold"
              >
                Записаться сейчас
              </button>
            ) : (
              <button className="mx-auto mt-[40px] w-[220px] h-[50px] bg-green-800  rounded-full text-black font-bold">
                Записаться сейчас
              </button>
            )}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

interface Props {
  hint: string;
  value: string;
  handler: (e: ChangeEvent<HTMLInputElement>) => void;
  isValidated: boolean;
}

const Input: FC<Props> = ({ hint, value, handler, isValidated }) => {
  if (!isValidated) {
    return (
      <div className="flex flex-col mt-4">
        <span className="text-white">{hint}</span>
        <input
          value={value}
          onChange={(e) => {
            handler(e);
          }}
          className="h-[50px] border-2 border-red-500 text-black p-2 outline-none"
        ></input>
      </div>
    );
  }
  return (
    <div className="flex flex-col mt-4">
      <span className="text-white">{hint}</span>
      <input
        value={value}
        onChange={(e) => {
          handler(e);
        }}
        className="h-[50px] text-black p-2 outline-none"
      ></input>
    </div>
  );
};

export default Form;
