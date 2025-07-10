const place = { name: 'New York', latLng: [41.6868, -74.2692] };
const loc = place.latLng;

/** 座標 */
interface Coordinate {
  x: number;
  y: number;
}
/** 境界矩形 */
interface BoundingBox {
  x: [number, number];
  y: [number, number];
}
/** ポリゴン */
interface Polygon {
  exterior: Coordinate[];
  holes: Coordinate[][];
  bbox?: BoundingBox;
}

function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
  const { bbox } = polygon;
  if (bbox) {
    if (
      pt.x < bbox.x[0] ||
      pt.x > bbox.x[1] ||
      pt.y < bbox.y[0] ||
      pt.y > bbox.y[1]
    ) {
      return false;
    }
  }
  return true;
  // ... より複雑なチェック
}
