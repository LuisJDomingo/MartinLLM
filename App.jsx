import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  MessageSquare, 
  Brain, 
  Monitor, 
  Zap, 
  Shield, 
  Code, 
  Download, 
  Play, 
  Star,
  Check,
  ArrowRight,
  Bot,
  Cpu,
  BarChart3
} from 'lucide-react'
import './App.css'

// Import images
import appScreenshot from './assets/images/app-screenshot.png'
import aiChatInterface from './assets/images/ai-chat-interface.jpg'
import aiBackground from './assets/images/ai-background.jpg'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Chat Inteligente",
      description: "Interfaz de chat avanzada con soporte para múltiples modelos de IA y conversaciones contextuales."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Múltiples Modelos",
      description: "Acceso a diferentes modelos LLM con configuración personalizable de parámetros."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Monitoreo en Tiempo Real",
      description: "Supervisa el rendimiento del sistema con métricas de CPU, RAM y almacenamiento."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Interfaz Profesional",
      description: "Diseño tipo IDE con sintaxis highlighting y terminal integrada."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Alto Rendimiento",
      description: "Optimizado para respuestas rápidas y manejo eficiente de recursos."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Seguro y Confiable",
      description: "Procesamiento local seguro con control total sobre tus datos."
    }
  ]

  const plans = [
    {
      name: "Básico",
      price: "Gratis",
      description: "Perfecto para empezar",
      features: [
        "Acceso a modelos básicos",
        "5 conversaciones por día",
        "Interfaz estándar",
        "Soporte por email"
      ],
      popular: false
    },
    {
      name: "Profesional",
      price: "$29/mes",
      description: "Para usuarios avanzados",
      features: [
        "Acceso a todos los modelos",
        "Conversaciones ilimitadas",
        "Monitoreo avanzado",
        "Configuración personalizada",
        "Soporte prioritario",
        "Exportar conversaciones"
      ],
      popular: true
    },
    {
      name: "Empresarial",
      price: "$99/mes",
      description: "Para equipos y empresas",
      features: [
        "Todo lo de Profesional",
        "Múltiples usuarios",
        "API personalizada",
        "Integración empresarial",
        "Soporte 24/7",
        "Entrenamiento personalizado"
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Bot className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">Martin LLM</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Características</a>
            <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">Demo</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Precios</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contacto</a>
          </div>
          <Button className="glow-effect">
            <Download className="w-4 h-4 mr-2" />
            Descargar
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient tech-pattern">
        <div className="container mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              🚀 Nueva versión disponible
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Interfaz Profesional para
              <br />
              <span className="typing-animation">Modelos de IA</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Martin LLM es la herramienta definitiva para interactuar con modelos de lenguaje de IA. 
              Diseñada para desarrolladores y profesionales que buscan máxima productividad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow-effect">
                <Download className="w-5 h-5 mr-2" />
                Descargar Gratis
              </Button>
              <Button size="lg" variant="outline">
                <Play className="w-5 h-5 mr-2" />
                Ver Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshot */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img 
              src={appScreenshot} 
              alt="Martin LLM Interface" 
              className="w-full rounded-lg shadow-2xl border border-border glow-effect"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Características Principales
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Todo lo que necesitas para una experiencia de IA profesional y eficiente
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover bg-card/50 border-border">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Experiencia de Usuario Excepcional
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Interfaz Intuitiva</h3>
                    <p className="text-muted-foreground">Diseño familiar tipo IDE con todas las herramientas al alcance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Configuración Avanzada</h3>
                    <p className="text-muted-foreground">Control total sobre parámetros del modelo y comportamiento</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Monitoreo en Tiempo Real</h3>
                    <p className="text-muted-foreground">Visualiza el rendimiento del sistema mientras trabajas</p>
                  </div>
                </div>
              </div>
              <Button className="mt-8 glow-effect">
                Probar Ahora
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src={aiChatInterface} 
                alt="AI Chat Interface" 
                className="w-full rounded-lg shadow-xl border border-border"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Planes de Precios
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tus necesidades
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative card-hover ${plan.popular ? 'border-primary glow-effect' : 'border-border'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Más Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{plan.price}</div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${plan.popular ? 'glow-effect' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.price === 'Gratis' ? 'Comenzar Gratis' : 'Elegir Plan'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Usuarios Activos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Modelos Soportados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Tiempo de Actividad</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Potenciar tu Productividad?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a miles de profesionales que ya están usando Martin LLM para maximizar su eficiencia con IA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="glow-effect">
              <Download className="w-5 h-5 mr-2" />
              Descargar Ahora
            </Button>
            <Button size="lg" variant="outline">
              Contactar Ventas
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="w-6 h-6 text-primary" />
                <span className="text-lg font-bold">Martin LLM</span>
              </div>
              <p className="text-muted-foreground text-sm">
                La interfaz profesional para modelos de IA que potencia tu productividad.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Producto</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Características</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Precios</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Documentación</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Soporte</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Centro de Ayuda</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Estado del Servicio</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Comunidad</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Acerca de</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Carreras</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacidad</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Martin LLM. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

