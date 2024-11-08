import React, { useState } from 'react';
import { 
  Activity,
  Brain,
  Stethoscope,
  Radio,
  Image,
  Microscope,
  HeartPulse,
  Smartphone,
  Network,
  Speaker
} from 'lucide-react';

const DetailPanel = ({ item }) => {
  if (!item) return null;
  
  return (
    <div className="fixed inset-y-0 right-0 w-96 bg-gradient-to-br from-white via-purple-50 to-white shadow-2xl p-6 transform transition-all duration-300 border-l border-purple-100 overflow-y-auto">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-50 to-transparent -z-10" />
      
      <h3 className="text-xl font-bold bg-gradient-to-r from-purple-900 to-indigo-900 bg-clip-text text-transparent mb-6 flex items-center gap-3">
        <ItemIcon item={item} className="w-6 h-6 text-purple-600" />
        {item.title}
      </h3>

      <div className="prose prose-purple">
        {item.details && item.details.map((detail, index) => (
          <div key={index} className="mb-6 relative">
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-400 via-indigo-400 to-purple-300 rounded-full" />
            
            <div className="pl-4">
              <h4 className="font-semibold text-purple-800 mb-2">{detail.subtitle}</h4>
              <p className="text-gray-600 leading-relaxed">{detail.content}</p>
            </div>
          </div>
        ))}

        {!item.details && (
          <>
            <div className="mb-6 relative">
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-400 via-indigo-400 to-purple-300 rounded-full" />
              <div className="pl-4">
                <h4 className="font-semibold text-purple-800 mb-2">Descripción</h4>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
            {item.features && (
              <div className="mb-6 relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-400 via-indigo-400 to-purple-300 rounded-full" />
                <div className="pl-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Características</h4>
                  <ul className="space-y-2">
                    {item.features.map((feature, index) => (
                      <li key={index} className="text-gray-600">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const Section = ({ title, items, activeItem, onItemClick }) => {
  return (
    <div className="relative bg-white/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-purple-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 via-indigo-50/50 to-blue-50/50" />
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-conic from-purple-500/5 via-transparent to-blue-500/5" />
      </div>

      <h2 className="relative text-2xl font-bold bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent mb-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
          <Activity className="w-6 h-6 text-white" />
        </div>
        {title}
      </h2>

      <div className="relative grid md:grid-cols-2 gap-6">
        {items.map((item) => (
          <div 
            key={item.title}
            className={`group p-6 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-102 ${
              activeItem?.title === item.title 
              ? 'bg-gradient-to-br from-purple-100 via-indigo-100 to-purple-100 shadow-lg' 
              : 'bg-white/70 hover:bg-gradient-to-br hover:from-purple-50 hover:to-indigo-50'
            }`}
            onClick={() => onItemClick(item)}
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/0 via-white/30 to-purple-400/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000" />

            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 via-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <ItemIcon item={item} className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-xl bg-gradient-to-r from-purple-900 to-indigo-900 bg-clip-text text-transparent">
                {item.title}
              </h3>
            </div>

            <p className="text-gray-700 mb-3 leading-relaxed">{item.description}</p>
            {item.subtext && (
              <p className="text-sm text-gray-600 italic">{item.subtext}</p>
            )}
            
            {item.features && (
              <ul className="mt-4 space-y-2">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-purple-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            {/* Espacio para imagen dentro de cada concepto */}
            <div className="mt-4 h-48 w-full bg-white/50 rounded-lg border border-purple-100"></div>

            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-purple-400">
                <Activity className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ItemIcon = ({ item, className }) => {
  switch (item.title) {
    case "Mejora de Imágenes Médicas":
      return <Microscope className={className} />;
    case "Análisis de Señales Biológicas":
      return <HeartPulse className={className} />;
    case "Resonancia Magnética (MRI)":
      return <Stethoscope className={className} />;
    case "Análisis EEG":
      return <Brain className={className} />;
    case "Compresión de Audio y Video":
      return <Speaker className={className} />;
    case "Telecomunicaciones":
      return <Network className={className} />;
    case "Reconocimiento de Voz":
      return <Smartphone className={className} />;
    default:
      return <Activity className={className} />;
  }
};

export default function FourierGuide() {
  const [activeItem, setActiveItem] = useState(null);

  const sections = {
    fundamentals: {
    title: "Conceptos Fundamentales",
    items: [
      {
        title: "Transformada de Fourier",
        description: "Técnica matemática que convierte señales del dominio del tiempo al dominio de la frecuencia",
        subtext: "Fundamental para el análisis y procesamiento de señales",
        longDescription: "La Transformada de Fourier es una herramienta matemática fundamental que permite descomponer señales complejas en sus componentes frecuenciales básicos. Esta técnica revolucionó el procesamiento de señales al permitir analizar y modificar señales en el dominio de la frecuencia.",
        features: [
          "Descomposición de señales complejas en componentes sinusoidales",
          "Identificación de patrones frecuenciales en señales",
          "Base matemática del procesamiento digital moderno",
          "Análisis espectral de señales continuas y discretas",
          "Optimización de sistemas de comunicación"
        ],
        applications: [
          "Análisis espectral en sistemas de comunicación",
          "Procesamiento de imágenes y audio digital",
          "Sistemas de compresión de datos",
          "Diseño de filtros digitales",
          "Análisis de vibraciones mecánicas"
        ],
        technologies: [
          "FFT (Fast Fourier Transform)",
          "Analizadores de espectro",
          "Sistemas de procesamiento digital",
          "Software de análisis de señales"
        ],
        imagePath: "/path/to/fourier-transform-image.webp"
      },
      {
        title: "Convolución",
        description: "Operación matemática que combina dos señales para producir una tercera señal modificada",
        subtext: "Esencial en filtrado y procesamiento de señales",
        longDescription: "La convolución es una operación matemática fundamental que describe cómo la forma de una señal es modificada al pasar a través de un sistema. Es la base del filtrado digital y tiene aplicaciones cruciales en el procesamiento de señales e imágenes.",
        features: [
          "Filtrado de señales digitales en tiempo real",
          "Procesamiento avanzado de imágenes",
          "Análisis de sistemas lineales invariantes en el tiempo",
          "Implementación de efectos de audio",
          "Modelado de respuestas de sistemas físicos"
        ],
        applications: [
          "Diseño de filtros digitales",
          "Procesamiento de audio profesional",
          "Sistemas de visión artificial",
          "Análisis de señales biomédicas",
          "Procesamiento de imágenes satelitales"
        ],
        technologies: [
          "DSP (Digital Signal Processors)",
          "Sistemas de filtrado adaptativo",
          "Software de procesamiento de audio",
          "Sistemas embebidos de tiempo real"
        ],
        imagePath: "/path/to/convolution-image.webp"
      },
      {
        title: "Procesamiento Frecuencial",
        description: "Manipulación de la representación en frecuencia de una señal",
        subtext: "Mejora características y extrae información específica",
        longDescription: "El procesamiento en el dominio de la frecuencia permite manipular señales de manera más eficiente para ciertas aplicaciones, facilitando la eliminación de ruido, la compresión de datos y el análisis espectral.",
        features: [
          "Análisis espectral avanzado",
          "Filtrado frecuencial selectivo",
          "Compresión eficiente de señales",
          "Detección de componentes específicas",
          "Mejora de la relación señal-ruido"
        ],
        applications: [
          "Sistemas de comunicación digital",
          "Análisis de vibraciones",
          "Procesamiento de señales de radar",
          "Sistemas de sonar",
          "Análisis de señales sísmicas"
        ],
        technologies: [
          "Analizadores de espectro en tiempo real",
          "Sistemas de procesamiento paralelo",
          "Hardware especializado de DSP",
          "Software de análisis espectral"
        ],
        imagePath: "/path/to/frequency-processing-image.png"
      }
    ]
  },
  medical: {
    title: "Aplicaciones Médicas",
    items: [
      {
        title: "Mejora de Imágenes Médicas",
        description: "Técnicas avanzadas para el procesamiento de imágenes diagnósticas",
        subtext: "Mejora la precisión en diagnósticos médicos",
        longDescription: "Las técnicas de procesamiento de señales aplicadas a imágenes médicas permiten mejorar significativamente la calidad y claridad de las imágenes diagnósticas, facilitando la detección temprana y el seguimiento de condiciones médicas.",
        features: [
          "Reducción avanzada de ruido en imágenes médicas",
          "Realce adaptativo de contraste y detalles",
          "Reconstrucción 3D de alta precisión de tejidos",
          "Segmentación automática de estructuras anatómicas",
          "Fusión de múltiples modalidades de imagen"
        ],
        applications: [
          "Diagnóstico por imagen avanzado",
          "Planificación quirúrgica 3D",
          "Seguimiento de tratamientos oncológicos",
          "Análisis de patologías cerebrales",
          "Evaluación cardiovascular"
        ],
        technologies: [
          "Sistemas de imagen médica digital",
          "Software de reconstrucción 3D",
          "Algoritmos de aprendizaje profundo",
          "Sistemas PACS avanzados"
        ],
        imagePath: "/path/to/medical-imaging-image.webp"
      },
      {
        title: "Análisis de Señales Biológicas",
        description: "Monitoreo y análisis de señales vitales y neurológicas",
        subtext: "Detección temprana de anomalías",
        longDescription: "El análisis de señales biológicas permite monitorear y comprender mejor las funciones vitales del cuerpo humano, facilitando la detección temprana de condiciones médicas y el seguimiento de tratamientos.",
        features: [
          "Análisis en tiempo real de ECG y EEG",
          "Monitoreo cardíaco avanzado",
          "Detección de patrones anormales en señales vitales",
          "Procesamiento de señales neuronales",
          "Análisis de variabilidad del ritmo cardíaco"
        ],
        applications: [
          "Monitoreo de pacientes en UCI",
          "Diagnóstico de arritmias cardíacas",
          "Estudios del sueño",
          "Evaluación neurológica",
          "Rehabilitación asistida"
        ],
        technologies: [
          "Sistemas de monitoreo multiparamétrico",
          "Algoritmos de detección de anomalías",
          "Dispositivos de telemetría médica",
          "Software de análisis clínico"
        ],
        imagePath: "/path/to/biological-signals-image.webp"
      },
      {
        title: "Procesamiento Frecuencial en Ultrasonidos",
        description: "Mejora de calidad y resolución en imágenes de ultrasonido",
        subtext: "Visualizaciones más claras de tejidos internos",
        longDescription: "Las técnicas avanzadas de procesamiento frecuencial permiten obtener imágenes de ultrasonido de mayor calidad y resolución, facilitando diagnósticos más precisos y procedimientos menos invasivos.",
        features: [
          "Mejora adaptativa de resolución",
          "Reducción avanzada de ruido",
          "Realce de estructuras anatómicas específicas",
          "Reconstrucción 4D en tiempo real",
          "Optimización de contraste tisular"
        ],
        applications: [
          "Diagnóstico prenatal",
          "Evaluación cardiovascular",
          "Guía de procedimientos intervencionistas",
          "Elastografía tisular",
          "Ecografía músculo-esquelética"
        ],
        technologies: [
          "Sistemas de ultrasonido digital",
          "Procesadores de señal especializados",
          "Software de reconstrucción 4D",
          "Algoritmos de mejora de imagen"
        ],
        imagePath: "/path/to/ultrasound-image.png"
      }
    ]
  },
  tech: {
    title: "Aplicaciones Tecnológicas",
    items: [
      {
        title: "Compresión de Audio y Video",
        description: "Optimización de archivos multimedia mediante análisis frecuencial",
        subtext: "Reducción de tamaño manteniendo la calidad",
        longDescription: "Las técnicas de compresión basadas en análisis frecuencial permiten reducir significativamente el tamaño de archivos multimedia mientras mantienen una alta calidad perceptual, fundamental para streaming y almacenamiento digital.",
        features: [
          "Compresión de audio con pérdidas mínimas",
          "Optimización avanzada de archivos multimedia",
          "Análisis espectral para compresión eficiente",
          "Codificación perceptual de audio",
          "Compresión adaptativa en tiempo real"
        ],
        applications: [
          "Servicios de streaming de audio/video",
          "Almacenamiento de medios digitales",
          "Transmisión de contenido en tiempo real",
          "Producción musical profesional",
          "Sistemas de videoconferencia"
        ],
        technologies: [
          "Códecs de audio/video avanzados",
          "Algoritmos de compresión perceptual",
          "Hardware de codificación especializado",
          "Software de producción multimedia"
        ],
        imagePath: "/path/to/compression-image.png"
      },
      {
        title: "Filtros Digitales en Procesamiento de Imágenes",
        description: "Aplicación de convolución para mejorar imágenes",
        subtext: "Mejora visual y corrección de defectos",
        longDescription: "Los filtros digitales son fundamentales en el procesamiento moderno de imágenes, permitiendo mejorar la calidad visual, eliminar ruido y resaltar características específicas en fotografía, video y sistemas de visión artificial.",
        features: [
          "Suavizado adaptativo de imágenes",
          "Eliminación inteligente de ruido",
          "Realce selectivo de bordes",
          "Corrección de distorsiones ópticas",
          "Mejora de contraste local"
        ],
        applications: [
          "Fotografía digital profesional",
          "Sistemas de visión artificial",
          "Procesamiento de video en tiempo real",
          "Restauración de imágenes",
          "Aplicaciones de realidad aumentada"
        ],
        technologies: [
          "Procesadores de imagen dedicados",
          "Software de edición profesional",
          "Algoritmos de filtrado adaptativo",
          "Sistemas de procesamiento en tiempo real"
        ],
        imagePath: "/path/to/digital-filters-image.png"
      },
      {
        title: "Reconocimiento de Voz",
        description: "Procesamiento de señales de voz para interfaces",
        subtext: "Fundamental en asistentes virtuales",
        longDescription: "El reconocimiento de voz utiliza técnicas avanzadas de procesamiento de señales para convertir el habla en texto y comandos, permitiendo la interacción natural con dispositivos y sistemas.",
        features: [
          "Conversión precisa de voz a texto",
          "Análisis espectral en tiempo real",
          "Filtrado adaptativo de ruido ambiente",
          "Identificación de patrones de voz",
          "Procesamiento de lenguaje natural"
        ],
        applications: [
          "Asistentes virtuales inteligentes",
          "Sistemas de dictado médico",
          "Control por voz en automóviles",
          "Transcripción automática",
          "Sistemas de seguridad biométrica"
        ],
        technologies: [
          "Motores de reconocimiento de voz",
          "Procesadores de señal digital",
          "Algoritmos de machine learning",
          "Redes neuronales especializadas"
        ],
        imagePath: "/path/to/voice-recognition-image.jpg"
      },
      {
        title: "Procesamiento de Señales 5G",
        description: "Técnicas avanzadas para comunicaciones móviles de nueva generación",
        subtext: "Optimización de redes de alta velocidad",
        longDescription: "El procesamiento de señales en sistemas 5G implica técnicas sofisticadas para manejar grandes anchos de banda, múltiples usuarios y comunicaciones de baja latencia, fundamentales para la próxima generación de servicios móviles.",
        features: [
          "Procesamiento MIMO masivo",
          "Beamforming adaptativo",
          "Modulación y codificación avanzada",
          "Optimización del espectro en tiempo real",
          "Gestión de interferencias"
        ],
        applications: [
          "Redes móviles de alta velocidad",
          "Comunicaciones IoT masivas",
          "Servicios de baja latencia",
          "Redes privadas industriales",
          "Sistemas de comunicación crítica"
        ],
        technologies: [
          "Procesadores de señal 5G",
          "Arrays de antenas inteligentes",
          "Software de gestión de red",
          "Sistemas de optimización espectral"
        ],
        imagePath: "/path/to/5g-signals-image.jpg"
      }
    ]
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 p-6 relative">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-30 pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 via-indigo-400 to-purple-600 blur-3xl animate-pulse" />
        <div className="absolute inset-8 rounded-full border-2 border-purple-300 animate-spin-slow" />
      </div>

      <header className="relative text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-900 via-indigo-800 to-purple-900 bg-clip-text text-transparent mb-4">
          Convolución y Transformada Rápida de Fourier
        </h1>
        <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
          Fundamentos y Aplicaciones en el Procesamiento de Señales
        </p>
      </header>

      <div className="max-w-6xl mx-auto relative">
        {Object.values(sections).map((section) => (
          <Section
            key={section.title}
            title={section.title}
            items={section.items}
            activeItem={activeItem}
            onItemClick={setActiveItem}
          />
        ))}
      </div>

      <DetailPanel item={activeItem} />
    </div>
  );
}
