import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const galleryImages = [
    {
      url: "https://cdn.poehali.dev/files/92691ccb-f076-42cc-b6e7-820d7cb335ef.jpg",
      title: "Главный вход школы №16",
      description: "Здание МБОУ СОШ №16 г. Нефтекамск"
    },
    {
      url: "https://cdn.poehali.dev/files/f8579b68-8169-4c0b-af91-e917f9423c55.jpg",
      title: "Фасад школы",
      description: "Вход в образовательное учреждение"
    },
    {
      url: "https://cdn.poehali.dev/files/91ece66a-ab44-4962-90ad-eeec7bee3158.jpg",
      title: "Школьный двор",
      description: "Территория школы с зелеными насаждениями"
    }
  ];

  const achievements = [
    {
      icon: "Award",
      title: "Качественное образование",
      description: "Высокие результаты ЕГЭ и олимпиад"
    },
    {
      icon: "Users",
      title: "Опытные педагоги",
      description: "Квалифицированный преподавательский состав"
    },
    {
      icon: "BookOpen",
      title: "Современные программы",
      description: "Актуальные методики обучения"
    },
    {
      icon: "Trophy",
      title: "Достижения учеников",
      description: "Победители региональных конкурсов"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-foreground text-primary rounded-full flex items-center justify-center font-bold text-xl">
                16
              </div>
              <div>
                <h1 className="text-2xl font-bold">МБОУ СОШ №16</h1>
                <p className="text-sm opacity-90">г. Нефтекамск</p>
              </div>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#main" className="hover:underline transition-all">Главная</a>
              <a href="#about" className="hover:underline transition-all">О школе</a>
              <a href="#gallery" className="hover:underline transition-all">Галерея</a>
            </div>
          </nav>
        </div>
      </header>

      <section id="main" className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Образование. Традиции. Будущее.
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Муниципальное бюджетное общеобразовательное учреждение Средняя общеобразовательная школа №16 города Нефтекамска — это современное образовательное пространство, где каждый ученик может раскрыть свой потенциал.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="shadow-lg">
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться с нами
              </Button>
              <Button size="lg" variant="outline" className="shadow-lg">
                <Icon name="Info" className="mr-2" size={20} />
                Подробнее
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">О школе</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              История, традиции и современность нашего образовательного учреждения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={achievement.icon as any} className="text-accent" size={28} />
                  </div>
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {achievement.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 shadow-lg">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl">История школы</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="prose max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  МБОУ СОШ №16 города Нефтекамска была основана для обеспечения качественного образования подрастающего поколения. За годы работы школа зарекомендовала себя как надежное образовательное учреждение, где сочетаются лучшие академические традиции и современные образовательные технологии.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  В школе создана благоприятная образовательная среда, позволяющая каждому ученику развивать свои способности и таланты. Наши педагоги используют передовые методики преподавания, уделяя внимание как академическим успехам, так и личностному развитию учащихся.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-6 bg-accent/5 rounded-lg">
                    <div className="text-4xl font-bold text-accent mb-2">500+</div>
                    <div className="text-muted-foreground">Учеников</div>
                  </div>
                  <div className="text-center p-6 bg-accent/5 rounded-lg">
                    <div className="text-4xl font-bold text-accent mb-2">50+</div>
                    <div className="text-muted-foreground">Педагогов</div>
                  </div>
                  <div className="text-center p-6 bg-accent/5 rounded-lg">
                    <div className="text-4xl font-bold text-accent mb-2">15+</div>
                    <div className="text-muted-foreground">Лет опыта</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-16 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Галерея</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Фотографии наших мероприятий и школьной жизни
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{image.title}</CardTitle>
                  <CardDescription>{image.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">МБОУ СОШ №16</h3>
              <p className="opacity-90 mb-4">
                Современное образовательное учреждение города Нефтекамска
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <div className="space-y-2 opacity-90">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>г. Нефтекамск, Республика Башкортостан</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (XXX) XXX-XX-XX</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>school16@example.ru</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Режим работы</h3>
              <div className="space-y-2 opacity-90">
                <div>Пн-Пт: 8:00 - 18:00</div>
                <div>Сб-Вс: Выходной</div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center opacity-75">
            © 2025 МБОУ СОШ №16. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;