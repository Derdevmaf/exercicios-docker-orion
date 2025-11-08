CREATE TABLE cursos (
    id SERIAL PRIMARY KEY,
    nome_curso VARCHAR(100) NOT NULL
);

CREATE TABLE alunos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    curso_id INT,
    CONSTRAINT fk_curso FOREIGN KEY (curso_id)
        REFERENCES cursos (id)
);

INSERT INTO cursos (nome_curso)
VALUES 
    ('Ciência de Dados'),
    ('Engenharia de Software'),
    ('Administração'),
    ('Design Digital');

INSERT INTO alunos (nome, email, curso_id)
VALUES
    ('Ana Pereira', 'ana.pereira@email.com', 1),
    ('Carlos Silva', 'carlos.silva@email.com', 2),
    ('Beatriz Souza', 'beatriz.souza@email.com', 1),
    ('João Oliveira', 'joao.oliveira@email.com', 3);

SELECT * FROM cursos;
SELECT * FROM alunos;