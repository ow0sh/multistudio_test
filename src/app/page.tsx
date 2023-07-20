import Body from '@/components/Body';
import Header from '@/components/Header';
import Section1 from '@/components/sections/Section1';
import Section2 from '@/components/sections/Section2';
import Section3 from '@/components/sections/Section3';
import Section4 from '@/components/sections/Section4';
import Form from '@/components/sections/Form';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Body>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Form />
      </Body>
      <Footer />
    </>
  );
}
