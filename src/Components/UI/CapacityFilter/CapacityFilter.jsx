import React from 'react'

export const CapacityFilter = () => {
  return (
    <div className="d-flex gap-5 my-0 justify-content-center">
      <div className="list-group mx-0 mt-2 w-100">
        <label className="list-group-item d-flex gap-2">
          <input className="form-check-input flex-shrink-0" type="checkbox" defaultValue />
          <span>
            desde 10 hasta 50 personas
            <small className="d-block text-muted"></small>
          </span>
        </label>
        <label className="list-group-item d-flex gap-2">
          <input className="form-check-input flex-shrink-0" type="checkbox" />
          <span>
            de 50 hasta 100 personas
            <small className="d-block text-muted"></small>
          </span>
        </label>
        <label className="list-group-item d-flex gap-2">
          <input className="form-check-input flex-shrink-0" type="checkbox" />
          <span>
            de 100 hasta 150 personas
            <small className="d-block text-muted"></small>
          </span>
        </label>
        <label className="list-group-item d-flex gap-2 w-100">
          <input className="form-check-input flex-shrink-0" type="checkbox" />
          <span>
            mas de 150 personas
            <small className="d-block text-muted"></small>
          </span>
        </label>
      </div>
    </div>
  )
}
