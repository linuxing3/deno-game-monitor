import { client } from "../../services/db.sql.ts";

try {
  await client.execute(`
        CREATE TABLE users (
            id int(11) NOT NULL AUTO_INCREMENT,
            name varchar(255) NOT NULL,
            email varchar(255) NOT NULL UNIQUE,
            password varchar(255) NOT NULL,
            created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id)
        ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
    `);

  await client.execute(`
    CREATE TABLE IF NOT EXISTS trojan_users (
        id INT UNSIGNED NOT NULL AUTO_INCREMENT,
        username VARCHAR(64) NOT NULL,
        password CHAR(56) NOT NULL,
        passwordShow VARCHAR(255) NOT NULL,
        quota BIGINT NOT NULL DEFAULT 0,
        download BIGINT UNSIGNED NOT NULL DEFAULT 0,
        upload BIGINT UNSIGNED NOT NULL DEFAULT 0,
        useDays int(10) DEFAULT 0,
        expiryDate char(10) DEFAULT '',
        PRIMARY KEY (id),
        INDEX (password)
    )
  `)
  await client.execute(`
        CREATE TABLE documents (
            id int(11) NOT NULL AUTO_INCREMENT,
            title varchar(255) NOT NULL,
            content varchar(255) NOT NULL UNIQUE,
            toEntity varchar(255) NOT NULL UNIQUE,
            FromEntity varchar(255) NOT NULL UNIQUE,
            author varchar(255) NOT NULL,
            created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id)
        ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
    `);
} catch (err) {
  console.error(err);
}
