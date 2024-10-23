const MapPoint = () => {
  return (
    <div className='w-full h-full bg-slate-700'>
      <iframe
        title='Nha Trang Map'
        className='w-full h-[400px]'
        style={{ border: 0 }}
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.700326084019!2d109.19033961526026!3d12.239533391329297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3170676bcad09c0d%3A0x331f51cf9a22a626!2zNzggVGjDoWkgTmd1eeG7hW4sIFbEqW5oIEjDoCwgTmhhIFRyYW5nLCBLaMOhbmggSMOyYSwgVmlldG5hbQ!5e0!3m2!1svi!2s!4v1698061795467!5m2!1svi!2s'
        allowFullScreen
        loading='lazy'
      ></iframe>
    </div>
  );
};

export default MapPoint;
