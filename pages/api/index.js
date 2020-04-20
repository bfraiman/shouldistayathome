import { getRandom, dayHelper, IS_ALLOWED } from '../../helpers/constans';

export default (_, res) => {
  res.status(200).json({
    shouldistayathome: !IS_ALLOWED,
    message: getRandom(dayHelper()),
  });
};
