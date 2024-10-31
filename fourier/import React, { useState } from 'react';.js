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
          features: [
            "Descomposición de señales complejas",
            "Identificación de patrones frecuenciales",
            "Base del procesamiento digital moderno"
          ]
        },
        {
          title: "Convolución",
          description: "Operación matemática que combina dos señales para producir una tercera señal modificada",
          subtext: "Esencial en filtrado y procesamiento de señales",
          features: [
            "Filtrado de señales digitales",
            "Procesamiento de imágenes",
            "Análisis de sistemas lineales"
          ]
        },
        {
          title: "Procesamiento Frecuencial",
          description: "Manipulación de la representación en frecuencia de una señal",
          subtext: "Mejora características y extrae información específica",
          features: [
            "Análisis espectral",
            "Filtrado frecuencial",
            "Compresión de señales"
          ]
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
          features: [
            "Reducción de ruido en imágenes médicas",
            "Realce de contraste y detalles",
            "Reconstrucción 3D de tejidos"
          ]
        },
        {
          title: "Análisis de Señales Biológicas",
          description: "Monitoreo y análisis de señales vitales y neurológicas",
          subtext: "Detección temprana de anomalías",
          features: [
            "Análisis de ECG y EEG",
            "Monitoreo cardíaco en tiempo real",
            "Detección de patrones anormales"
          ]
        },
        {
          title: "Procesamiento Frecuencial en Ultrasonidos",
          description: "Mejora de calidad y resolución en imágenes de ultrasonido",
          subtext: "Visualizaciones más claras de tejidos internos",
          features: [
            "Mejora de resolución",
            "Reducción de ruido",
            "Realce de estructuras anatómicas"
          ]
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
          features: [
            "Compresión de audio sin pérdidas significativas",
            "Optimización de archivos multimedia",
            "Análisis espectral para compresión"
          ]
        },
        {
          title: "Filtros Digitales en Procesamiento de Imágenes",
          description: "Aplicación de convolución para mejorar imágenes",
          subtext: "Mejora visual y corrección de defectos",
          features: [
            "Suavizado de imágenes",
            "Eliminación de ruido",
            "Realce de bordes"
          ]
        },
        {
          title: "Reconocimiento de Voz",
          description: "Procesamiento de señales de voz para interfaces",
          subtext: "Fundamental en asistentes virtuales",
          features: [
            "Conversión voz a datos",
            "Análisis espectral",
            "Filtrado de ruido"
          ]
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