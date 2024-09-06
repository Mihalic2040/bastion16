import { useState } from 'react';
import './App.css'
import BasiontLogo from './assets/logo.png'
import Image1 from './assets/mode1.png'
import Image2 from './assets/mode2.png'
import Image3 from './assets/mode3.png'

// navItems.js
export const navItems = [
  // { name: 'Правила', href: '/rules' },
  // { name: 'Спільнота', href: '/community' },
  // { name: 'Контанти', href: '/contact' },
  { name: 'Вікіпедія', href: 'https://wiki.bastion16.co.ua/index.php?title=%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B0_%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D0%B0' },
  { name: 'Анкета', href: 'https://docs.google.com/forms/d/e/1FAIpQLSe0Qsbh2L7hSQRFHwnlt10-yOaqB1BXJ__NMYjaWTmWFmMVMQ/viewform?pli=1' },  
  { name: 'Мапа', href: 'http://map.bastion16.co.ua/' },
];


const Header = () => (
  <header className="px-4 lg:px-6 h-14 flex items-center">
    <a className="flex items-center justify-center" href="#">
      {/* Your SVG logo here */}
      <img src={BasiontLogo} alt="Бастіон 16" className="h-8 w-auto" />
      <span className="sr-only">Бастіон 16</span>
    </a>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      {navItems.map(({ name, href }) => (
        <a key={name} className="text-sm font-medium hover:underline underline-offset-4" href={href}>
          {name}
        </a>
      ))}
    </nav>
  </header>
);

const HeroSection = () => {
  const [buttonText, setButtonText] = useState("IP: play.bastion16.com");
  const ip = "play.bastion16.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(ip).then(() => {
      setButtonText("Скопійовано!!!");
      setTimeout(() => {
        setButtonText(`IP: ${ip}`); // Reset the button text after 2 seconds
      }, 2000);
    });
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#2c2c2c]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Ласкаво просимо до Bastion 16
              </h1>
              <p className="max-w-[600px] text-[#a0a0a0] md:text-xl">
                Відчуйте усе тепло та затишок нашого сервера, де ви зможете знайти багато цікавих людей та бути собою.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a 
                onClick={handleCopy} 
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#4caf50] px-8 text-sm font-medium text-[#1e1e1e] shadow transition-colors hover:bg-[#43a047] ml-4 cursor-pointer"
                href="#"
              >
                {buttonText}
              </a>
              <a className="inline-flex h-10 items-center justify-center rounded-md border border-[#a0a0a0] bg-[#2c2c2c] px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#3c3c3c] hover:text-white" href="https://docs.google.com/forms/d/e/1FAIpQLSe0Qsbh2L7hSQRFHwnlt10-yOaqB1BXJ__NMYjaWTmWFmMVMQ/viewform?pli=1">
                Анкета на вступ
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={BasiontLogo}
              width="400"
              height="400"
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const GameModesSection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-[#2c2c2c]">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-[#4caf50] px-3 py-1 text-sm">Трохи про нас</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Що тут є?</h2>
          {/* <p className="max-w-[900px] text-[#a0a0a0] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            From thrilling PvP battles to immersive survival challenges, our server offers a wide range of game modes to cater to every Minecraft enthusiast.
          </p> */}
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
        {['Ніяких донатів', 'Мультисвіти', 'Глибока історія'].map((mode, index) => (
          <div key={mode} className="flex flex-col justify-center space-y-4 bg-[#3c3c3c] rounded-lg p-4">
            <img
            // If mode 'мультисвіти' then use Image2
              // src={index === 1 ? Image1 : Image2} 
              src={index === 0 ? Image1 : index === 1 ? Image2 : Image3}
              width="200"
              height="200"
              alt={`Mode ${index + 1}`}
              className="mx-auto aspect-square overflow-hidden rounded-lg object-cover object-center sm:w-full"
            />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">{mode}</h3>
              <p className="text-[#a0a0a0]">
                {mode === 'Ніяких донатів' && 'Відсутність донату в грі гарантує що ти будеш впевнений в досягненях іншиг гравців. Також це не знищує баланс гри. І це не змішує реальну і віртуальну економіку'} 
                {mode === 'Мультисвіти' && 'На сервері присутні 3 світи. Анархія, Енторія, Альтеріс. Анархія це світ в який можна попасти без анкети. Але будь готовий комунікувати з іншими гравцями цього жорстокого світу.'}
                {mode === 'Глибока історія' && 'Спільнота існує з 2016. За цей час встигло розивинутись багато історій, країн, героїв. У кожного є своя історія але всіх гравців обєдює ця чудова гра.'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CommunitySection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-[#2c2c2c]">
    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          Зворотній зв'язок
        </h2>
        <p className="mx-auto max-w-[600px] text-[#a0a0a0] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Телеграм бот для звязку з адміністрацією сервера.
        </p>
      </div>
      <div className="mx-auto w-full max-w-sm space-y-2 flex flex-col items-center">
        <form className="flex gap-2">
          <button
            onClick={() => window.open('https://t.me/Bastion_minecraft_bot', '_blank')}
            className="inline-flex items-center justify-center h-10 px-4 py-2 bg-[#4caf50] text-white rounded-md hover:bg-[#007bb5] transition-colors"
            type="submit"
          >
            <i className="fab fa-telegram-plane"></i>Шоста Вежа
          </button>
        </form>
        <p className="text-xs text-[#a0a0a0]">Якщо ти москаль тобі не допоможуть.</p>
      </div>
    </div>
  </section>
);


const Footer = () => (
  <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#3c3c3c]">
    <p className="text-xs text-[#a0a0a0]">2024 Зроблено з душею</p>
    {/* <nav className="sm:ml-auto flex gap-4 sm:gap-6">
      {['Terms of Service', 'Privacy Policy'].map((item) => (
        <a key={item} className="text-xs hover:underline underline-offset-4" href="#">
          {item}
        </a>
      ))}
    </nav> */}
  </footer>
);


function App() {
  
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#1e1e1e] text-white">
    <Header />
    <main className="flex-1">
      <HeroSection />
      <GameModesSection />
      <CommunitySection />
    </main>
    <Footer />
  </div>
  )
}

export default App
