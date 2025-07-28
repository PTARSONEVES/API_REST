exports.consulta = function () {

  const texto = 'SELECT '+
  '`Tbspessoatipo`.`id`, `Tbspessoatipo`.`tipopessoa`, '+
  '`Tblpessoas`.`id` AS `Tbspessoatipo.Tblpessoas.id`, `Tblpessoas`.`nomepessoa` AS `Tbspessoatipo.Tblpessoas.nomepessoa`, `Tblpessoas`.`tbspessoatipoid` AS `Tbspessoatipo.Tblpessoas.tbspessoatipoid`, `Tblpessoas`.`cpfpessoa` AS `Tbspessoatipo.Tblpessoas.cpfpessoa`, `Tblpessoas`.`cnpjpessoa` AS `Tbspessoatipo.Tblpessoas.cnpjpessoa`, `Tblpessoas`.`nascpessoa` AS `Tbspessoatipo.Tblpessoas.nascpessoa`, '+
  '`Tblpessoas->Tblpessoamidia`.`id` AS `Tbspessoatipo.Tblpessoas.Tblpessoamidia.id`, `Tblpessoas->Tblpessoamidia`.`tblpessoaid` AS `Tbspessoatipo.Tblpessoas.Tblpessoamidia.tblpessoaid`, `Tblpessoas->Tblpessoamidia`.`tbstypemidiaid` AS `Tbspessoatipo.Tblpessoas.Tblpessoamidia.tbstypemidiaid`, '+
  '`Tblpessoas->Tblpessoamidia->Tbstypemidium`.`id` AS `Tbspessoatipo.Tblpessoas.Tblpessoamidia.Tbstypemidium.id`, `Tblpessoas->Tblpessoamidia->Tbstypemidium`.`namemidia` AS `Tbspessoatipo.Tblpessoas.Tblpessoamidia.Tbstypemidium.namemidia`, '+
  '`Tblpessoas->Tblemails`.`id` AS `Tbspessoatipo.Tblpessoas.Tblemails.id`, `Tblpessoas->Tblemails`.`email` AS `Tbspessoatipo.Tblpessoas.Tblemails.email`, `Tblpessoas->Tblemails`.`confirmed` AS `Tbspessoatipo.Tblpessoas.Tblemails.confirmed` '+
  'FROM '+
  '`tbspessoatipos` AS `Tbspessoatipo` '+
  'LEFT OUTER JOIN `tblpessoas` AS `Tblpessoas` ON `Tbspessoatipo`.`id` = `Tblpessoas`.`tbspessoatipoid` '+
  'LEFT OUTER JOIN `tblpessoamidias` AS `Tblpessoas->Tblpessoamidia` ON `Tblpessoas`.`id` = `Tblpessoas->Tblpessoamidia`.`TblpessoaId` '+
  'LEFT OUTER JOIN `tbstypemidias` AS `Tblpessoas->Tblpessoamidia->Tbstypemidium` ON `Tblpessoas->Tblpessoamidia`.`tbstypemidiaid` = `Tblpessoas->Tblpessoamidia->Tbstypemidium`.`id` '+
  'LEFT OUTER JOIN `tblemails` AS `Tblpessoas->Tblemails` ON `Tblpessoas`.`id` = `Tblpessoas->Tblemails`.`TblpessoaId` '+
  'ORDER BY `Tbspessoatipo`.`id` ASC';

  return texto;

};
