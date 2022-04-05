import InnerAccordion from '@/components/InnerAccordion';

export default function Home() {
  return (
    <div>
      <h1>Blockchain Ecosystem Map</h1>
      <div>
        <InnerAccordion title="Hover" id="hover">
          <p> lorem-ipsum lorem-ipsum lorem-ipsum </p>
        </InnerAccordion>
        <br />
        <InnerAccordion title="Active" id="active">
          <p> lorem-ipsum lorem-ipsum lorem-ipsum </p>
        </InnerAccordion>
      </div>
    </div>
  );
}
