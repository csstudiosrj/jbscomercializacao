import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, Star, ShieldCheck, Award, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const features = [
  { icon: ShieldCheck, title: "Garantia de Procedência", desc: "Veículos inspecionados", red: true },
  { icon: Award, title: "Qualidade Premium", desc: "Padrão showroom", red: false },
  { icon: Star, title: "Avaliação 5 Estrelas", desc: "Satisfação máxima", red: true },
  { icon: Clock, title: "Atendimento Ágil", desc: "Consultoria especializada", red: false },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-brand-red selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5 transition-all duration-300 relative">
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-red via-brand-red/60 to-transparent" />
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-heading font-bold text-white tracking-tighter">
              JBS <span className="text-brand-red">COMERCIALIZAÇÃO</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            <a href="#showroom" className="hover:text-brand-red transition-colors">Showroom</a>
            <a href="#sobre" className="hover:text-brand-red transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-brand-red transition-colors">Contato</a>
          </div>
          <Button
            variant="outline"
            className="hidden md:flex border-brand-red/50 text-brand-red hover:bg-brand-red hover:text-white transition-all duration-300"
            asChild
          >
            <a href="https://wa.me/5521980921622" target="_blank" rel="noreferrer">
              <Phone className="w-4 h-4 mr-2" />
              (21) 98092-1622
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-car.png"
            alt="Luxury Car in Showroom"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div variants={fadeIn} className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Excelência Comprovada</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold font-heading leading-[1.1] mb-6 text-white">
              A Arte de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-red-400 to-primary">
                Dirigir o Melhor
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Onde o requinte encontra a performance. Descubra uma seleção exclusiva de veículos premium no coração do Rio de Janeiro.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="h-14 px-8 text-base font-semibold bg-brand-red hover:bg-brand-red/85 text-white shadow-[0_0_30px_rgba(185,28,28,0.25)] hover:shadow-[0_0_40px_rgba(185,28,28,0.45)] transition-all duration-300"
                asChild
              >
                <a href="#showroom">Explorar Estoque</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base font-semibold border-white/20 hover:bg-white/5 transition-all duration-300"
                asChild
              >
                <a href="#contato">Fale com um Consultor</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Features Section */}
      <section className="py-20 relative z-10 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {features.map((feature, idx) => (
              <motion.div key={idx} variants={fadeIn} className="flex flex-col items-center text-center group">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 ${
                    feature.red
                      ? "bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white"
                      : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                  }`}
                >
                  <feature.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold font-heading text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Showroom Preview Section */}
      <section id="showroom" className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">Nossa Coleção</h2>
            <div className="w-24 h-1 bg-brand-red mx-auto rounded-full opacity-90" />
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              Cada veículo em nosso showroom foi selecionado meticulosamente para oferecer a você o mais alto padrão de qualidade e sofisticação.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group overflow-hidden rounded-lg aspect-[4/3]"
            >
              <img src="/showroom-car.png" alt="Elegância em Movimento" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-brand-red font-semibold tracking-wider text-sm uppercase mb-2 block">Sofisticação</span>
                <h3 className="text-2xl font-bold font-heading text-white">Elegância em Movimento</h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group overflow-hidden rounded-lg aspect-[4/3]"
            >
              <img src="/interior-car.png" alt="Conforto Premium" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">Interior Premium</span>
                <h3 className="text-2xl font-bold font-heading text-white">O Detalhe Faz a Diferença</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-card/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/5 rounded-l-full blur-3xl -z-10 transform translate-x-1/2" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-heading text-white mb-8"
            >
              Confiança que Acelera
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-12"
            >
              Na JBS Comercialização, entendemos que comprar um carro é mais do que uma transação comercial — é a realização de um sonho. Nossa missão é proporcionar uma experiência automotiva inigualável, pautada na transparência, excelência e dedicação absoluta a cada cliente que cruza nossas portas.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-4 bg-background/80 border border-brand-red/20 px-8 py-4 rounded-full"
            >
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
              </div>
              <span className="text-white font-semibold">Classificação Máxima de Clientes</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contato" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold font-heading text-white mb-2">Venha nos Visitar</h2>
              <div className="w-16 h-1 bg-brand-red rounded-full mb-6" />
              <p className="text-muted-foreground mb-12 text-lg">
                Agende um test drive ou faça-nos uma visita para conhecer nosso estoque de perto. Nossa equipe está pronta para recebê-lo com exclusividade.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-card border border-brand-red/20 flex items-center justify-center shrink-0 group-hover:border-brand-red transition-colors">
                    <MapPin className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Endereço</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Rua Barros Barreto, 115 - Loja A<br />
                      Bonsucesso, Rio de Janeiro - RJ<br />
                      CEP: 21032-140
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-card border border-brand-red/20 flex items-center justify-center shrink-0 group-hover:border-brand-red transition-colors">
                    <Phone className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Telefone</h4>
                    <a href="https://wa.me/5521980921622" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-brand-red transition-colors text-lg">
                      (21) 98092-1622
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-card border border-primary/20 flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Instagram</h4>
                    <a href="https://www.instagram.com/jbs_comercializacao/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      @jbs_comercializacao
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-red/20 bg-background pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="text-2xl font-heading font-bold text-white tracking-tighter">
              JBS <span className="text-brand-red">COMERCIALIZAÇÃO</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://www.instagram.com/jbs_comercializacao/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://wa.me/5521980921622" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-brand-red transition-colors">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} JBS Comercialização. Todos os direitos reservados.</p>
            <p>
              Desenvolvido por <a href="mailto:cscomrj02@gmail.com" className="text-white hover:text-brand-red transition-colors font-medium">CS Studios</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
