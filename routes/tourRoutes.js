const fs = require('fs');

const express = require('express');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
};

const createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: { newTour },
      });
    }
  );
};

const getTour = (req, res) => {
  const tour = tours.find((el) => el.id === req.params.id * 1);

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID!',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

const updateTour = (req, res) => {
  const id = req.params.id * 1;

  const theTour = tours.find((el) => el.id === id);

  if (!theTour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID!',
    });
  }

  Object.assign(theTour, req.body);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      if (err) {
        return res.status(500).json({
          status: 'error',
          message: 'Could not update the file',
        });
      }

      res.status(201).json({
        status: 'success',
        data: { theTour },
      });
    }
  );
};

const deleteTour = (req, res) => {
  const id = req.params.id * 1;

  const index = tours.findIndex((el) => el.id === id);
  console.log(index);

  if (index === -1) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID!',
    });
  }

  tours.splice(index, 1);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours, null, 2),
    (err) => {
      if (err) {
        return res.status(500).json({
          status: 'error',
          message: 'Could not delete the tour',
        });
      }

      res.status(204).json({
        status: 'success',
        data: null,
      });
    }
  );
};

const router = express.Router();

router.route('/').get(getAllTours).post(createTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
