"use client";
import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Object3DNode, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import countries from "@/data/globe.json";
declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
  }
}

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

// This file contains a simplified GeoJSON dataset of country polygons for the Globe component
// Save this as src/data/globe.json or adjust the import path accordingly

const countries = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "United States",
        "code": "USA"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-125.0, 48.0],
          [-125.0, 32.0],
          [-114.0, 32.0],
          [-114.0, 36.0],
          [-94.0, 36.0],
          [-94.0, 30.0],
          [-83.0, 30.0],
          [-83.0, 25.0],
          [-80.0, 25.0],
          [-80.0, 31.0],
          [-75.0, 31.0],
          [-75.0, 43.0],
          [-66.0, 43.0],
          [-66.0, 48.0],
          [-125.0, 48.0]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Canada",
        "code": "CAN"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-140.0, 70.0],
          [-140.0, 50.0],
          [-125.0, 50.0],
          [-125.0, 48.0],
          [-66.0, 48.0],
          [-66.0, 43.0],
          [-55.0, 43.0],
          [-55.0, 70.0],
          [-140.0, 70.0]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Mexico",
        "code": "MEX"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-114.0, 32.0],
          [-114.0, 18.0],
          [-86.0, 18.0],
          [-86.0, 25.0],
          [-94.0, 25.0],
          [-94.0, 30.0],
          [-94.0, 32.0],
          [-114.0, 32.0]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Brazil",
        "code": "BRA"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-70.0, 0.0],
          [-70.0, -30.0],
          [-40.0, -30.0],
          [-40.0, 0.0],
          [-70.0, 0.0]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "United Kingdom",
        "code": "GBR"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-5.0, 50.0],
          [-5.0, 58.0],
          [2.0, 58.0],
          [2.0, 50.0],
          [-5.0, 50.0]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "France",
        "code": "FRA"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-5.0, 48.0],
          [-5.0, 42.0],
          [8.0, 42.0],
          [8.0, 48.0],
          [-5.0, 48.0]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Germany",
        "code": "DEU"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [6.0, 47.0],
          [6.0, 55.0],
          [15.0, 55.0],
          [15.0, 47.0],
          [6.0, 47.0]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Russia",
        "code": "RUS"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [20.0, 45.0],
          [20.0, 70.0],
          [180.0, 70.0],
          [180.0, 45.0],
          [20.0, 45.0]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "China",
        "code": "CHN"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [75.0, 20.0],
          [75.0, 45.0],
          [135.0, 45.0],
          [135.0, 20.0],
          [75.0, 20.0]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "India",
        "code": "IND"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [70.0, 8.0],
          [70.0, 35.0],
          [90.0, 35.0],
          [90.0, 8.0],
          [70.0, 8.0]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Australia",
        "code": "AUS"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [115.0, -10.0],
          [115.0, -40.0],
          [155.0, -40.0],
          [155.0, -10.0],
          [115.0, -10.0]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "South Africa",
        "code": "ZAF"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [15.0, -25.0],
          [15.0, -35.0],
          [32.0, -35.0],
          [32.0, -25.0],
          [15.0, -25.0]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Egypt",
        "code": "EGY"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [25.0, 22.0],
          [25.0, 32.0],
          [35.0, 32.0],
          [35.0, 22.0],
          [25.0, 22.0]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Japan",
        "code": "JPN"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [130.0, 30.0],
          [130.0, 45.0],
          [145.0, 45.0],
          [145.0, 30.0],
          [130.0, 30.0]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Indonesia",
        "code": "IDN"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [95.0, -5.0],
          [95.0, 5.0],
          [140.0, 5.0],
          [140.0, -5.0],
          [95.0, -5.0]
        ]]
      }
    }
  ]
};

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};


export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

let numbersOfRings = [0];

export function Globe({ globeConfig, data }: WorldProps) {
  const [globeData, setGlobeData] = useState<
    | {
        size: number;
        order: number;
        color: (t: number) => string;
        lat: number;
        lng: number;
      }[]
    | null
  >(null);

  const globeRef = useRef<ThreeGlobe | null>(null);

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  };

  useEffect(() => {
    if (globeRef.current) {
      _buildData();
      _buildMaterial();
    }
  }, [globeRef.current]);

  const _buildMaterial = () => {
    if (!globeRef.current) return;

    const globeMaterial = globeRef.current.globeMaterial() as unknown as {
      color: Color;
      emissive: Color;
      emissiveIntensity: number;
      shininess: number;
    };
    globeMaterial.color = new Color(globeConfig.globeColor);
    globeMaterial.emissive = new Color(globeConfig.emissive);
    globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
    globeMaterial.shininess = globeConfig.shininess || 0.9;
  };

  const _buildData = () => {
    const arcs = data;
    let points = [];
    for (let i = 0; i < arcs.length; i++) {
      const arc = arcs[i];
      const rgb = hexToRgb(arc.color) as { r: number; g: number; b: number };
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.startLat,
        lng: arc.startLng,
      });
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    }

    // remove duplicates for same lat and lng
    const filteredPoints = points.filter(
      (v, i, a) =>
        a.findIndex((v2) =>
          ["lat", "lng"].every(
            (k) => v2[k as "lat" | "lng"] === v[k as "lat" | "lng"]
          )
        ) === i
    );

    setGlobeData(filteredPoints);
  };

  useEffect(() => {
    if (globeRef.current && globeData) {
      globeRef.current
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .showAtmosphere(defaultProps.showAtmosphere)
        .atmosphereColor(defaultProps.atmosphereColor)
        .atmosphereAltitude(defaultProps.atmosphereAltitude)
        .hexPolygonColor((e) => {
          return defaultProps.polygonColor;
        });
      startAnimation();
    }
  }, [globeData]);

  const startAnimation = () => {
    if (!globeRef.current || !globeData) return;

    globeRef.current
      .arcsData(data)
      .arcStartLat((d) => (d as { startLat: number }).startLat * 1)
      .arcStartLng((d) => (d as { startLng: number }).startLng * 1)
      .arcEndLat((d) => (d as { endLat: number }).endLat * 1)
      .arcEndLng((d) => (d as { endLng: number }).endLng * 1)
      .arcColor((e: any) => (e as { color: string }).color)
      .arcAltitude((e) => {
        return (e as { arcAlt: number }).arcAlt * 1;
      })
      .arcStroke((e) => {
        return [0.32, 0.28, 0.3][Math.round(Math.random() * 2)];
      })
      .arcDashLength(defaultProps.arcLength)
      .arcDashInitialGap((e) => (e as { order: number }).order * 1)
      .arcDashGap(15)
      .arcDashAnimateTime((e) => defaultProps.arcTime);

    globeRef.current
      .pointsData(data)
      .pointColor((e) => (e as { color: string }).color)
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2);

    globeRef.current
      .ringsData([])
      .ringColor((e: any) => (t: any) => e.color(t))
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod(
        (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
      );
  };

  useEffect(() => {
    if (!globeRef.current || !globeData) return;

    const interval = setInterval(() => {
      if (!globeRef.current || !globeData) return;
      numbersOfRings = genRandomNumbers(
        0,
        data.length,
        Math.floor((data.length * 4) / 5)
      );

      globeRef.current.ringsData(
        globeData.filter((d, i) => numbersOfRings.includes(i))
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [globeRef.current, globeData]);

  return (
    <>
      <threeGlobe ref={globeRef} />
    </>
  );
}

export function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0);
  }, []);

  return null;
}

export function World(props: WorldProps) {
  const { globeConfig } = props;
  const scene = new Scene();
  scene.fog = new Fog(0xffffff, 400, 2000);
  return (
    <Canvas scene={scene} camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={new Vector3(-400, 100, 400)}
      />
      <directionalLight
        color={globeConfig.directionalTopLight}
        position={new Vector3(-200, 500, 200)}
      />
      <pointLight
        color={globeConfig.pointLight}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />
      <Globe {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={1}
        autoRotate={true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

export function hexToRgb(hex: string) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function genRandomNumbers(min: number, max: number, count: number) {
  const arr = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  return arr;
}
