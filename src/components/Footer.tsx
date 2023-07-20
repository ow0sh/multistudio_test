import Wrapper from './Wrapper';

const Footer = () => {
  return (
    <footer className="bg-default-gray-darker h-[100px] text-white">
      <Wrapper>
        <div className="flex justify-center pt-[30px] h-full">
          <span className="px-2">Мы работаем продуктивно</span>
          <span className="px-2">Copyright 2023</span>
          <span className="px-2">All rights reserved</span>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
