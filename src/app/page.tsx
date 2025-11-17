"use client";

import { ArrowRight, Watch, Apple, Smartphone, Activity, Utensils, TrendingUp, CheckCircle, Star, Zap, CreditCard, Smartphone as Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function Home() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const plans = [
    {
      name: "Iniciante",
      price: { monthly: "Grátis", annual: "Grátis" },
      priceValue: { monthly: 0, annual: 0 },
      trial: null,
      description: "Perfeito para começar sua jornada fitness",
      target: "Iniciantes sem experiência em treinos",
      features: [
        "Treinos básicos personalizados",
        "Formulário básico de cadastro",
        "Exercícios para iniciantes",
        "Acesso via web (iOS e Android)",
        "Acompanhamento básico de progresso"
      ],
      color: "gray",
      popular: false
    },
    {
      name: "Evolução",
      price: { monthly: "R$ 19,90", annual: "R$ 218,90" },
      priceValue: { monthly: 19.90, annual: 218.90 },
      trial: "3 dias grátis",
      description: "Para quem treina há 6 meses e quer evoluir",
      target: "Praticantes regulares sem evolução",
      features: [
        "Treinos medianos personalizados",
        "Formulário mediano detalhado",
        "Análise do seu treino atual",
        "1 relatório de evolução a cada 3 meses",
        "Suporte básico com IA",
        "Integração com relógios",
        "Planos otimizados para sua rotina"
      ],
      color: "emerald",
      popular: false
    },
    {
      name: "Performance",
      price: { monthly: "R$ 39,90", annual: "R$ 359,10" },
      priceValue: { monthly: 39.90, annual: 359.10 },
      trial: "7 dias grátis",
      description: "Para quem treina há 12 meses e busca resultados",
      target: "Praticantes avançados buscando evolução",
      features: [
        "Treinos medianos avançados",
        "Formulário completo personalizado",
        "Análise profunda do treino atual",
        "2 relatórios de evolução a cada 3 meses",
        "Suporte mediano com IA",
        "Receitas saudáveis personalizadas",
        "Integração completa com relógios",
        "Planos nutricionais baseados em dados"
      ],
      color: "blue",
      popular: true
    },
    {
      name: "Elite",
      price: { monthly: "R$ 69,90", annual: "R$ 489,30" },
      priceValue: { monthly: 69.90, annual: 489.30 },
      trial: "15 dias grátis",
      description: "Para atletas que buscam máxima performance",
      target: "Atletas com 12+ meses de experiência",
      features: [
        "Treinos avançados de alta performance",
        "Formulário avançado completo",
        "Análise detalhada e otimização contínua",
        "3 relatórios de evolução a cada 6 meses",
        "Suporte avançado prioritário com IA",
        "Receitas avançadas e atraentes",
        "Integração premium com todos relógios",
        "Planos de dieta avançados",
        "Acompanhamento em tempo real com IA",
        "Ajustes automáticos baseados em dados"
      ],
      color: "purple",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10" />
        <div className="container mx-auto px-4 py-20 sm:py-32">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge className="mb-6 bg-emerald-500/20 text-emerald-300 border-emerald-500/30 px-4 py-2 text-sm">
              <Zap className="w-4 h-4 mr-2 inline" />
              FitIA - Fitness com Inteligência Artificial
            </Badge>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transforme seu corpo com
              <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent"> Inteligência Artificial</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Treinos personalizados, dietas inteligentes e acompanhamento em tempo real. 
              Conecte seu relógio ou preencha um formulário. Comece grátis!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-full shadow-2xl shadow-emerald-500/30 transition-all hover:scale-105">
                Começar Grátis Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-600 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
                Ver Planos
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>Plano gratuito disponível</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>Teste grátis nos planos pagos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>Cancele quando quiser</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compatibilidade com Relógios */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Compatível com Seus Dispositivos
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Conecte seu relógio inteligente ou use nosso formulário personalizado
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Apple Watch", icon: Apple },
              { name: "Samsung Galaxy", icon: Watch },
              { name: "Fitbit", icon: Activity },
              { name: "Garmin", icon: Watch },
              { name: "Xiaomi Mi Band", icon: Watch },
              { name: "Formulário", icon: Smartphone }
            ].map((device, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-800 transition-all hover:scale-105 cursor-pointer">
                <div className="flex flex-col items-center gap-3">
                  <device.icon className="w-8 h-8 text-emerald-400" />
                  <span className="text-white text-sm text-center font-medium">{device.name}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              Tudo que Você Precisa em Um Só Lugar
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tecnologia de ponta para transformar sua jornada fitness
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border-emerald-500/20 p-8 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all">
              <div className="bg-emerald-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Activity className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Treinos Personalizados</h3>
              <p className="text-gray-400 mb-6">
                IA analisa seus dados e cria treinos sob medida para seu objetivo: emagrecimento, hipertrofia ou condicionamento.
              </p>
              <ul className="space-y-3">
                {["Adaptação ao seu nível", "Progressão inteligente", "Exercícios variados"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20 p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all">
              <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Utensils className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Dietas Inteligentes</h3>
              <p className="text-gray-400 mb-6">
                Planos alimentares personalizados com base no seu metabolismo, objetivos e preferências alimentares.
              </p>
              <ul className="space-y-3">
                {["Receitas saudáveis", "Lista de compras", "Controle de calorias"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20 p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all">
              <div className="bg-purple-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 break-words">Acompanhamento em Tempo Real</h3>
              <p className="text-gray-400 mb-6">
                Monitore seu progresso com gráficos detalhados, métricas de desempenho e insights personalizados.
              </p>
              <ul className="space-y-3">
                {["Estatísticas detalhadas", "Metas alcançadas", "Relatórios semanais"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              Como Funciona
            </h2>
            <p className="text-gray-400 text-lg">
              Comece sua transformação em 3 passos simples
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Conecte ou Preencha",
                description: "Conecte seu relógio inteligente ou preencha nosso formulário com idade, peso, altura e objetivos.",
                color: "emerald"
              },
              {
                step: "2",
                title: "IA Personaliza",
                description: "Nossa inteligência artificial analisa seus dados e cria treinos e dietas personalizados para você.",
                color: "blue"
              },
              {
                step: "3",
                title: "Transforme-se",
                description: "Siga seu plano personalizado, acompanhe resultados e alcance seus objetivos com suporte contínuo.",
                color: "purple"
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 flex items-center justify-center text-3xl font-bold text-white shadow-2xl shadow-${item.color}-500/30`}>
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gray-600 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              Histórias de Sucesso
            </h2>
            <p className="text-gray-400 text-lg">
              Veja a transformação de quem já usa nossa plataforma
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Maria Silva",
                age: "32 anos",
                result: "Perdeu 15kg em 3 meses",
                text: "Incrível! Nunca consegui manter uma rotina de treinos até conhecer esta plataforma. Os treinos personalizados e as dietas são perfeitos para minha rotina.",
                rating: 5
              },
              {
                name: "João Santos",
                age: "28 anos",
                result: "Ganhou 8kg de massa muscular",
                text: "A IA realmente entende o que eu preciso. Os treinos evoluem comigo e as receitas são deliciosas. Melhor investimento que já fiz!",
                rating: 5
              },
              {
                name: "Ana Costa",
                age: "45 anos",
                result: "Melhorou condicionamento físico",
                text: "Estava sedentária há anos. O formulário inicial me ajudou a começar do zero, e hoje me sinto mais disposta e saudável. Recomendo muito!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 p-8 hover:bg-slate-800 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-slate-700 pt-4">
                  <p className="text-white font-bold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.age}</p>
                  <Badge className="mt-2 bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                    {testimonial.result}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-900/50" id="planos">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              Escolha Seu Plano Ideal
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Do iniciante ao atleta de elite, temos o plano perfeito para você
            </p>
            
            {/* Toggle Mensal/Anual */}
            <div className="inline-flex items-center gap-4 bg-slate-800/50 p-2 rounded-full border border-slate-700">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-full transition-all ${
                  billingCycle === "monthly"
                    ? "bg-emerald-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-6 py-2 rounded-full transition-all ${
                  billingCycle === "annual"
                    ? "bg-emerald-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Anual
                <Badge className="ml-2 bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-xs">
                  Economize
                </Badge>
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative p-6 transition-all hover:scale-105 ${
                  plan.popular
                    ? "bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-blue-500/50 shadow-2xl shadow-blue-500/20"
                    : "bg-slate-800/50 border-slate-700 hover:bg-slate-800"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 text-sm font-bold">
                      MAIS POPULAR
                    </Badge>
                  </div>
                )}
                
                {plan.trial && (
                  <div className="absolute -top-3 right-4">
                    <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-xs">
                      {plan.trial}
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-white mb-1">
                      {plan.price[billingCycle]}
                    </div>
                    {plan.priceValue[billingCycle] > 0 && (
                      <div className="text-gray-400 text-sm">
                        {billingCycle === "monthly" ? "/mês" : "/ano"}
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-gray-500 mb-4">{plan.target}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        plan.color === "gray" ? "text-gray-400" :
                        plan.color === "emerald" ? "text-emerald-400" :
                        plan.color === "blue" ? "text-blue-400" :
                        "text-purple-400"
                      }`} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                      : plan.priceValue[billingCycle] === 0
                      ? "bg-slate-700 hover:bg-slate-600"
                      : "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700"
                  } text-white transition-all hover:scale-105`}
                >
                  {plan.priceValue[billingCycle] === 0 ? "Começar Grátis" : "Assinar Agora"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            ))}
          </div>

          {/* Métodos de Pagamento */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 p-8">
              <h3 className="text-2xl font-bold text-white text-center mb-6">
                Formas de Pagamento
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center gap-3 p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                  <CreditCard className="w-10 h-10 text-emerald-400" />
                  <div className="text-center">
                    <p className="text-white font-semibold mb-1">Cartão de Crédito</p>
                    <p className="text-gray-400 text-sm">Planos mensais e anuais</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                  <CreditCard className="w-10 h-10 text-blue-400" />
                  <div className="text-center">
                    <p className="text-white font-semibold mb-1">Cartão de Débito</p>
                    <p className="text-gray-400 text-sm">Planos mensais e anuais</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                  <Phone className="w-10 h-10 text-purple-400" />
                  <div className="text-center">
                    <p className="text-white font-semibold mb-1">Pix</p>
                    <p className="text-gray-400 text-sm">Apenas planos anuais</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                <p className="text-emerald-300 text-sm text-center">
                  <CheckCircle className="w-4 h-4 inline mr-2" />
                  Pagamento seguro e criptografado. Cancele quando quiser.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 rounded-3xl p-12">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Pronto Para Transformar Seu Corpo?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Junte-se a milhares de pessoas que já alcançaram seus objetivos
            </p>
            <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-12 py-6 text-lg rounded-full shadow-2xl shadow-emerald-500/30 transition-all hover:scale-105">
              Começar Agora Grátis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400">
            <p className="mb-4 text-xl font-bold text-white">FitIA - Fitness com Inteligência Artificial</p>
            <p className="mb-4">© 2024 FitIA. Todos os direitos reservados.</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="hover:text-emerald-400 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Contato</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
