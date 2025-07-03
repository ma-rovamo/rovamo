// components/MiroFlowchart.jsx
import React from 'react';

const MiroFlowchart = ({ embedId, focusWidget, title, width = 768, height = 496 }) => {
  const embedUrl = `https://miro.com/app/live-embed/uXjVIv-mm7o=/?focusWidget=${focusWidget}&embedMode=view_only_without_ui&embedId=${embedId}`;
  
  return (
    <div className="miro-embed-container">
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>
      <iframe
        width={width}
        height={height}
        src={embedUrl}
        frameBorder="0"
        scrolling="no"
        allow="fullscreen; clipboard-read; clipboard-write"
        allowFullScreen
        className="border-0 rounded-lg shadow-lg"
      />
    </div>
  );
};

// components/FlowchartGallery.jsx
export const FlowchartGallery = () => {
  const flowcharts = [
    {
      id: 'revalio',
      title: 'Revalio',
      focusWidget: '3458764632722802170',
      embedId: '694961023092',
      directLink: 'https://miro.com/app/board/uXjVIv-mm7o=/?moveToWidget=3458764632722802170&cot=14'
    },
    {
      id: 'equity-vantage',
      title: 'Equity Vantage',
      focusWidget: '3458764632741584812',
      embedId: '458346173698',
      directLink: 'https://miro.com/app/board/uXjVIv-mm7o=/?moveToWidget=3458764632741584812&cot=14'
    },
    {
      id: 'enerlytics-customer',
      title: 'Enerlytics Customer',
      focusWidget: '3458764632749495354',
      embedId: '281839032509',
      directLink: 'https://miro.com/app/board/uXjVIv-mm7o=/?moveToWidget=3458764632749495354&cot=14'
    },
    {
      id: 'enerlytics-client',
      title: 'Enerlytics Client',
      focusWidget: '3458764632865132722',
      embedId: '964932746096',
      directLink: 'https://miro.com/app/board/uXjVIv-mm7o=/?moveToWidget=3458764632865132722&cot=14'
    },
    {
      id: 'locentrix-brand',
      title: 'Locentrix Brand',
      focusWidget: '3458764632839646978',
      embedId: '103906802696',
      directLink: 'https://miro.com/app/board/uXjVIv-mm7o=/?moveToWidget=3458764632839646978&cot=14'
    },
    {
      id: 'locentrix-shopping-center',
      title: 'Locentrix Shopping Center',
      focusWidget: '3458764632843541440',
      embedId: '372166549585',
      directLink: 'https://miro.com/app/board/uXjVIv-mm7o=/?moveToWidget=3458764632843541440&cot=14'
    },
    {
      id: 'locentrix-broker',
      title: 'Locentrix Broker',
      focusWidget: '3458764632845286039',
      embedId: '22510248498',
      directLink: 'https://miro.com/app/board/uXjVIv-mm7o=/?moveToWidget=3458764632845286039&cot=14'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Flowchart Gallery</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {flowcharts.map((chart) => (
          <div key={chart.id} className="flowchart-item">
            <MiroFlowchart
              embedId={chart.embedId}
              focusWidget={chart.focusWidget}
              title={chart.title}
            />
            <div className="mt-4">
              <a
                href={chart.directLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Open in Miro
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Individual component exports for specific use
export const RevalioFlowchart = () => (
  <MiroFlowchart
    embedId="694961023092"
    focusWidget="3458764632722802170"
    title=""
  />
);

export const EquityVantageFlowchart = () => (
  <MiroFlowchart
    embedId="458346173698"
    focusWidget="3458764632741584812"
    title=""
  />
);

export const EnerlyticsCustomerFlowchart = () => (
  <MiroFlowchart
    embedId="281839032509"
    focusWidget="3458764632749495354"
    title=""
  />
);

export const EnerlyticsClientFlowchart = () => (
  <MiroFlowchart
    embedId="964932746096"
    focusWidget="3458764632865132722"
    title=""
  />
);

export const LocentrixBrandFlowchart = () => (
  <MiroFlowchart
    embedId="103906802696"
    focusWidget="3458764632839646978"
    title=""
  />
);

export const LocentrixShoppingCenterFlowchart = () => (
  <MiroFlowchart
    embedId="372166549585"
    focusWidget="3458764632843541440"
    title="Locentrix Shopping Center"
  />
);

export const LocentrixBrokerFlowchart = () => (
  <MiroFlowchart
    embedId="22510248498"
    focusWidget="3458764632845286039"
    title="Locentrix Broker"
  />
);

export default MiroFlowchart;