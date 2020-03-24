
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments(); // desta forma cria o campo como chave primária e com auto incremento
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        table.string('ong_id').notNullable(); // campo para chave estrangeira

        table.foreign('ong_id').references('id').inTable('ong'); // criando relacionamento entre tabelas

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
