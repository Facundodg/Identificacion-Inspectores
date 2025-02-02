import './CardAgente.css'
import logo from '../../assets/logo_municipalidad.webp'
import img1 from '../../assets/img1.webp'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAgenteById, getAgenteByNum } from '../../services/servicesAgentes'

//http://localhost:5212/api/inspectores?hashLagajo=3d0ddec1ca8b4863e0618d5527ff6075d9f131960115c8e2a6384f09eb09a272'

function CardAgente() {
  const [dataAgente, setDataAgente] = useState(null)
  const { id } = useParams()

  const [activeTab, setactiveTab] = useState(0);
  const seleccionar = (index) => {
    setactiveTab(index);
  };

  useEffect(() => {
    cargarAgente()
  },[])

  function cargarAgente() {
    console.log(id)
    getAgenteByNum(id).then(res => setDataAgente(res))
    console.log(dataAgente)
  }

  return (
    <>
      <div className='cont-card'>

        <div className='cont-img'>
          <div className="cont-card2">
            <div>
              <img src={logo} alt="imagen perfil " className='logo' />
            </div>
            <img src={img1} className={`img-logo ${dataAgente != null && dataAgente[0].activo == 1 ? '' : 'false'}`} alt="imagen perfil " />
          </div>
        </div>
        <div className='cont-data'>
          <h3>{(dataAgente != null && dataAgente[0].nombreCompleto)}</h3>
          <h4>{(dataAgente != null && dataAgente[0].numeroAfiliado)}</h4>
          <h4>{(dataAgente != null && dataAgente[0].funcion)}</h4>
        </div>
        <div className='cont-action'>
          <div className='content-tabs'>
            <ul className="tabs">
              <li
                className={activeTab == 0 ? "active" : ""}
                onClick={() => seleccionar(0)}
              >
                Info 1
              </li>
              <li
                className={activeTab == 1 ? "active" : ""}
                onClick={() => seleccionar(1)}
              >
                info 2
              </li>
              
            </ul>
            <div className="tab-content">
              {activeTab === 0 && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla beatae maiores pariatur non praesentium cum?</p>}
              {activeTab === 1 && <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, blanditiis? Neque quibusdam facilis fugiat? Quis.</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardAgente
