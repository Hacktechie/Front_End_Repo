import PropTypes from 'prop-types'
import { lazy } from 'react'
import { Modal } from 'react-bootstrap'

const LanguageFilter = lazy(() => import('../components/LanguageFilter'))
const FormatFilter = lazy(() => import('../components/FormatFilter'))

function FilterModalMobile({
  show,
  hide,
  langFilter,
  setLangFilter,
  formatFilter,
  setFormatFilter,
  showRunningMovies,
  handleClearFilter
}) {
  return (
    <Modal
      show={show}
      onHide={hide}
      centered
      className='filter-modal-mobile'
      backdropClassName="custom-backdrop"
    >

      <Modal.Header className='filter-modal-header' closeButton>
        <h5 className='fw-bold mb-0'>Filter by</h5>
      </Modal.Header>

      <Modal.Body>
        <div className="movies_filter-container" style={{ maxHeight: '60vh' }}>
          <LanguageFilter
            langFilter={langFilter}
            setLangFilter={setLangFilter}
          />

          {showRunningMovies &&
            <FormatFilter
              formatFilter={formatFilter}
              setFormatFilter={setFormatFilter}
            />
          }

          <button
            className='text-primary clear_filter'
            disabled={langFilter === '' && formatFilter === '2D'}
            onClick={handleClearFilter}
            style={
              {
                display: 'block',
                width: '100%',
                position: 'sticky',
                bottom: 0,
                backgroundColor: 'white'
              }
            }
            >
            Clear all filters
          </button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

FilterModalMobile.propTypes = {
  show: PropTypes.bool,
  hide: PropTypes.func,
  langFilter: PropTypes.string,
  setLangFilter: PropTypes.func,
  formatFilter: PropTypes.string,
  setFormatFilter: PropTypes.func,
  showRunningMovies: PropTypes.bool,
  handleClearFilter: PropTypes.func
}

export default FilterModalMobile