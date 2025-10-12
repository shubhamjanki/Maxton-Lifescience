import React from "react";

const ProductGallery: React.FC = () => {
  return (
    <div style={{ 
      height: "100vh", 
      width: "100%", 
      margin: 0, 
      padding: 0,
      justifyContent:"center",
      display:"flex",
      justifyItems:"center",
      backgroundColor: "#ffffff" 
    }}>
      <iframe
        src="/product gallery.pdf#toolbar=0&navpanes=0&scrollbar=0"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          
          
        }}
        title="Catalogue"
      />
    </div>
  );
};

export default ProductGallery;