import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import images as ES modules (Vite supports this)
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Delete the default icon URLs to override
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const vendors = [
  {
    id: 1,
    name: "Anil Optical company",
    position: [29.75, 77.53],
    address:
      "Anil Optical company, Hanuman Tilla Rd, opposite Ajay electricals, Shamli, Uttar Pradesh 247776",
  },
  {
    id: 2,
    name: "Vendor 2",
    position: [34.0522, -118.2437], // Los Angeles
    address: "456 Sunset Blvd, Los Angeles, CA",
  },
];

const MapLocation = () => {
  return (
    <MapContainer
      center={[28.6139, 77.209]}
      zoom={7}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {vendors.map((vendor) => (
        <Marker key={vendor.id} position={vendor.position}>
          <Popup>
            <strong>{vendor.name}</strong>
            <br />
            {vendor.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapLocation;
