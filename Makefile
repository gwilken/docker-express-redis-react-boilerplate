up:
	docker-compose up;

populate-elastic:
	cd build-scripts; npm i;
	cd build-scripts; node json-to-elastic.js