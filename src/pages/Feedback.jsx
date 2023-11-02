import { Form } from "react-bootstrap"

function Feedback() {
  return (
    <Form>
      <div
        className="container bg-white p-5 my-3 my-lg-5 border"
        style={{ borderRadius: '30px', userSelect: 'none' }}>

        <h3 className="fw-bold mb-4 mb-lg-5">Feedback</h3>

        <div className="d-flex flex-column gap-3 gap-lg-4 mb-4 mb-lg-5">
          <h5>Please select Feedback Type</h5>

          <Form.Check
            type="radio"
            label="Report Bug"
            name="radioGroup"
            className="feedback-radio"
          />

          <Form.Check
            type="radio"
            label="Suggest Improvement"
            name="radioGroup"
            className="feedback-radio"
          />

          <Form.Check
            type="radio"
            label="Other Feedback"
            name="radioGroup"
            className="feedback-radio"
          />

        </div>

        <div className="d-flex flex-column gap-3 gap-lg-4">
          <h5>Please enter your eail & phone number</h5>

          <div>
            <input
              type="text"
              placeholder="Email (Optional)"
              className="p-3 col-12 col-md-5 col-lg-4 border"
              style={{ borderRadius: '10px' }} />
          </div>

          <div>
            <input
              type="text"
              placeholder="Mobile No."
              className="p-3 col-12 col-md-5 col-lg-4 border"
              style={{ borderRadius: '10px' }} />
          </div>

          <div>
            <textarea
              placeholder="Write your feedback"
              className="p-3 col-12 border"
              style={{ borderRadius: '10px', resize: 'none' }} />
          </div>

          <div>
            <input
              type="submit"
              value="Submit"
              className="btn btn-info text-white fw-semibold p-3 col-12 col-md-5 col-lg-4 border"
              style={{ borderRadius: '10px' }} />
          </div>

        </div>

      </div>
    </Form>
  )
}

export default Feedback