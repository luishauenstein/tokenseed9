import { useConnect } from 'wagmi';

export default function ConnectModal(props) {
  const [{ data, error }, connect] = useConnect();

  return (
    <>
      <div className="modalContainer">
        {data.connectors.map((connector, index) => (
          <button disabled={!connector.ready} key={connector.id} onClick={() => connect(connector)}>
            {connector.name}
            {!connector.ready && ' (unsupported)'}
          </button>
        ))}

        {/*error && <div>{error?.message ?? 'Failed to connect'}</div>*/}
      </div>
      <div className="backgroundOverlay" onClick={() => props.toggleModal()} />
      <style jsx>{`
        button {
          display: block;
          font-size: 1.6rem;
          padding: 2rem;
          background-color: transparent;
          border: none;
          border-radius: 15px;
          transition: background-color 0.2s;
          cursor: pointer;
        }
        button:hover {
          background-color: #f7f7f7;
        }
        .modalContainer {
          padding: 1rem;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          //align-items: center;
          background-color: white;
        }
        .backgroundOverlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: black;
          opacity: 0.05;
          z-index: -1;
        }
      `}</style>
    </>
  );
}
