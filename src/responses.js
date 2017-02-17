const respond = (request, response, content, type, status) => {
  response.writeHead(status, { 'Content-Type': type });
  response.write(content);
  response.end();
};

const success = (request, response, params, acceptedTypes) => {
  const obj = {
    message: 'This is a successful response.',
  };

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML}<message>${obj.message}</message>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, responseXML, 'text/xml', 200);
  }

  const objString = JSON.stringify(obj);

  return respond(request, response, objString, 'application/json', 200);
};

const badRequest = (request, response, params, acceptedTypes) => {
  const obj = {
    message: 'This request has the required parameters',
  };

  if (!params.valid || params.valid !== 'true') {
    obj.message = 'Missing valid query parameter set to true';
    obj.id = 'badRequest';

    if (acceptedTypes[0] === 'text/xml') {
      let responseXML = '<response>';
      responseXML = `${responseXML}<message>${obj.message}</message>`;
      responseXML = `${responseXML}<id>${obj.id}</id>`;
      responseXML = `${responseXML} </response>`;

      return respond(request, response, responseXML, 'text/xml', 400);
    }

    const objString = JSON.stringify(obj);

    return respond(request, response, objString, 'application/json', 400);
  }

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML}<message>${obj.message}</message>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, responseXML, 'text/xml', 200);
  }

  const objString = JSON.stringify(obj);

  return respond(request, response, objString, 'application/json', 200);
};

const unauthorized = (request, response, params, acceptedTypes) => {
  const obj = {
    message: 'You have successfully viewed the content',
  };

  if (!params.loggedIn || params.loggedIn !== 'yes') {
    obj.message = 'Missing loggedIn query parameter set to yes';
    obj.id = 'unauthorized';

    if (acceptedTypes[0] === 'text/xml') {
      let responseXML = '<response>';
      responseXML = `${responseXML}<message>${obj.message}</message>`;
      responseXML = `${responseXML}<id>${obj.id}</id>`;
      responseXML = `${responseXML} </response>`;

      return respond(request, response, responseXML, 'text/xml', 401);
    }

    const objString = JSON.stringify(obj);

    return respond(request, response, objString, 'application/json', 401);
  }

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML}<message>${obj.message}</message>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, responseXML, 'text/xml', 200);
  }

  const objString = JSON.stringify(obj);

  return respond(request, response, objString, 'application/json', 200);
};

const forbidden = (request, response, params, acceptedTypes) => {
  const obj = {
    message: 'You do not have access to this content',
    id: 'forbidden',
  };

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML}<message>${obj.message}</message>`;
    responseXML = `${responseXML}<id>${obj.id}</id>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, responseXML, 'text/xml', 403);
  }

  const objString = JSON.stringify(obj);

  return respond(request, response, objString, 'application/json', 403);
};

const internal = (request, response, params, acceptedTypes) => {
  const obj = {
    message: 'Internal Server Error; Something went wrong',
    id: 'internalError',
  };

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML}<message>${obj.message}</message>`;
    responseXML = `${responseXML}<id>${obj.id}</id>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, responseXML, 'text/xml', 500);
  }

  const objString = JSON.stringify(obj);

  return respond(request, response, objString, 'application/json', 500);
};

const notImplemented = (request, response, params, acceptedTypes) => {
  const obj = {
    message: 'A get request for this page has not been implemented yet; Check again later for updated content',
    id: 'notImplemented',
  };

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML}<message>${obj.message}</message>`;
    responseXML = `${responseXML}<id>${obj.id}</id>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, responseXML, 'text/xml', 501);
  }

  const objString = JSON.stringify(obj);

  return respond(request, response, objString, 'application/json', 501);
};

const notFound = (request, response, params, acceptedTypes) => {
  const obj = {
    message: 'The page you are looking for was not found',
    id: 'notFound',
  };

  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML}<message>${obj.message}</message>`;
    responseXML = `${responseXML}<id>${obj.id}</id>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, responseXML, 'text/xml', 404);
  }

  const objString = JSON.stringify(obj);

  return respond(request, response, objString, 'application/json', 404);
};

module.exports = {
  success,
  badRequest,
  unauthorized,
  forbidden,
  internal,
  notImplemented,
  notFound,
};
